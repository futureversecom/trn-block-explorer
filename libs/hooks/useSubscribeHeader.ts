import { Header } from "@polkadot/types/interfaces";
import { AnyJson } from "@polkadot/types/types";
import { useCallback, useEffect, useState } from "react";

import { useRootApi } from "@/libs/stores";

type tBlock = {
	height: number;
	hash: any;
	timestamp: any;
	state_root: any;
	parent_hash: any;
	extrinsics_root: any;
	events_aggregate: {
		aggregate?: {
			count: number;
		} | null;
	};
	extrinsics_aggregate: {
		aggregate?: {
			count: number;
		} | null;
	};
	id: any;
	spec_id: string;
	validator?: string | null;
	isFinalized: boolean;
} | null;

export const useSubscribeHeader = () => {
	const [block, setBlock] = useState(0);
	const [unfinalizedBlocks, setUnfinalizedBlock] = useState([] as tBlock[]);

	const api = useRootApi();

	const fetchData = useCallback(async () => {
		if (!api) return;
		// Subscribe to the new headers on-chain. The callback is fired when new headers
		// are found, the call itself returns a promise with a subscription that can be
		// used to unsubscribe from the newHead subscription
		const unsubscribe = await api.rpc.chain.subscribeAllHeads(
			async (header: Header) => {
				let blockArray: tBlock[] = [];

				const bestBlock = Number(header.number);

				try {
					const fhash = await api.rpc.chain.getFinalizedHead();
					const fheader = await api.rpc.chain.getHeader(fhash);
					const finalizedBlock = Number(fheader.number);

					for (let i: number = bestBlock; i >= finalizedBlock; i--) {
						const blockHash = await api.rpc.chain.getBlockHash(i);
						const signedBlock = await api.rpc.chain.getBlock(blockHash);
						const apiAt = await api.at(signedBlock?.block?.header?.hash);
						const allRecords = (
							await apiAt?.query?.system?.events()
						).toJSON() as AnyJson[];

						let ts = null;
						signedBlock?.block?.extrinsics.forEach(
							({ method: { args, method, section } }: any) => {
								// the way to get the block timestamp
								if (section === "timestamp" && method === "set") {
									const moment = args[0].unwrap();
									ts = new Date(moment.toNumber());
								}
							}
						);

						const blockObj: tBlock = {
							height: i,
							hash: fhash,
							timestamp: ts,
							state_root: signedBlock?.block?.header?.stateRoot,
							parent_hash: signedBlock?.block?.header?.parentHash,
							extrinsics_root: signedBlock?.block?.header?.extrinsicsRoot,
							extrinsics_aggregate: {
								aggregate: {
									count: signedBlock?.block?.extrinsics.length || 0,
								},
							},
							events_aggregate: {
								aggregate: {
									count: allRecords.length || 0,
								},
							},
							id: "",
							spec_id: "",
							validator: "",
							isFinalized: false,
						};
						blockArray.push(blockObj);
					}
				} catch (error) {
					console.error(
						"An unexpected error happened when listening to new blocks from Root Network.",
						error
					);
				}

				setBlock(bestBlock);
				setUnfinalizedBlock(blockArray);
			}
		);
	}, [api]);

	useEffect(() => {
		fetchData().catch(console.error);
	}, [fetchData, block]); // listen to the change in best block value

	return unfinalizedBlocks;
};
