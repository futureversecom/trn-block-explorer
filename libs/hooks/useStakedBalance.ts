import { Codec } from "@polkadot/types/types";
import { useEffect, useRef, useState } from "react";

import { useRootApi } from "@/libs/stores";
import { setStateWithRef } from "@/libs/utils";

type Ledger = undefined | Omit<StakedBalance, "unlocking">;

interface StakedBalance {
	total: number;
	active: number;
	unlocking: number;
}

export const useStakedBalance = (address: string) => {
	const api = useRootApi();

	const [balance, setBalance] = useState<StakedBalance>();
	const balanceRef = useRef(balance);

	const [unsubs, setUnsubs] = useState<Array<any>>([]);
	const unsubsRef = useRef(unsubs);

	const unsubscribe = () => {
		Object.values(unsubsRef.current).forEach((unsub: any) => {
			unsub();
		});
	};

	useEffect(() => {
		if (!api) return;

		const subscribeToLedger = async (address: string) => {
			const unsub = await api.query.staking.ledger(address, (res: Codec) => {
				const ledger = res.toJSON() as unknown as Ledger;
				const { total, active } = ledger ?? { total: 0, active: 0 };

				setStateWithRef(
					{
						total,
						active,
						unlocking: total - active,
					},
					setBalance,
					balanceRef
				);
			});

			setStateWithRef(unsubsRef.current.concat(unsub), setUnsubs, unsubsRef);
		};

		subscribeToLedger(address);

		return () => {
			unsubscribe();
		};
	}, [api, address]);

	return balance;
};
