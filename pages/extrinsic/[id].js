import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { isHex } from "@polkadot/util";
import moment from "moment";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TableLayout,
	TimeAgo,
} from "@/components";
import TransactionActions from "@/components/events/transactionActions";
import { BlockFinalizedIcon } from "@/components/icons";
import JSONViewer from "@/components/JSONViewer";
import {
	GetExtrinsicByRegexDocument,
	GetExtrinsicIdFromHashDocument,
	useGetBlocksQuery,
	useGetExtrinsicQuery,
} from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";
import { ROOT_GAS_TOKEN_PRE_BLOCK } from "@/libs/constants";
import { useExtrinsicSuccess, usePolling } from "@/libs/hooks";
import { formatBalance, formatExtrinsicId } from "@/libs/utils";

export const getServerSideProps = async (context) => {
	let extrinsicId = context?.params?.id;

	// redirects to /extrinsic/0000XXXXXX-00000X-XXXXX route
	const returnRedirect = (extrinsicIdValue) => ({
		redirect: {
			destination: `/extrinsic/${extrinsicIdValue}`,
			permanent: false,
		},
	});

	const returnProp = (extrinsicIdValue) => ({
		props: { extrinsicId: extrinsicIdValue },
	});

	const returnNotFound = () => ({ notFound: true });

	const getExtrinsicIdByRegex = async (blockNumber, extrinsicIdx) => {
		// gets the 0000XXXXXX-00000X-XXXXX extrinsicId based from the formatted XXXXXX-X id
		const byRegexResponse = await graphQLClient.request(
			GetExtrinsicByRegexDocument,
			{
				regex: `0+${blockNumber}-0+${extrinsicIdx}`,
			}
		);
		return !byRegexResponse?.archive?.extrinsic?.length
			? null
			: byRegexResponse?.archive?.extrinsic[0].id;
	};

	const getExtrinsicIdByHash = async (extrinsicHash) => {
		const byHashResponse = await graphQLClient.request(
			GetExtrinsicIdFromHashDocument,
			{
				extrinsicHash,
			}
		);
		return !byHashResponse?.archive?.extrinsic?.length
			? null
			: byHashResponse?.archive?.extrinsic[0].id;
	};

	if (
		!isHex(extrinsicId, 256) &&
		extrinsicId.length !== 66 &&
		extrinsicId.includes("-")
	) {
		const extrinsicIdSplit = extrinsicId?.split("-");

		if (extrinsicIdSplit && extrinsicIdSplit.length > 2) {
			// returns 0000XXXXXX-00000X-XXXXX extrinsicId
			return returnProp(extrinsicId);
		}

		const resultFromRegex = await getExtrinsicIdByRegex(
			extrinsicIdSplit[0],
			extrinsicIdSplit[1]
		);
		return !resultFromRegex
			? returnNotFound()
			: returnRedirect(resultFromRegex);
	}

	const resultFromHash = await getExtrinsicIdByHash(extrinsicId);
	return !resultFromHash ? returnNotFound() : returnProp(resultFromHash);
};

export default function Extrinsic({ extrinsicId }) {
	const query = useGetExtrinsicQuery(graphQLClient, { extrinsicId });
	const blockQuery = usePolling({}, useGetBlocksQuery, {
		limit: 1,
	});
	const data = query?.data?.archive?.extrinsic_by_pk;
	const extrinsic = query?.data?.archive?.extrinsic_by_pk;
	const extrinsicSuccess = useExtrinsicSuccess(extrinsic);

	const lastBlock =
		blockQuery?.data?.archive?.block_aggregate?.aggregate?.count;

	const blockConfirmations = useMemo(() => {
		if (!lastBlock || !data?.block?.height) return;
		return parseInt(lastBlock) - parseInt(data.block.height);
	}, [lastBlock, data?.block?.height]);

	return (
		<ContainerLayout>
			<PageHeader
				title={`Extrinsic # ${formatExtrinsicId(extrinsicId)}`}
				icon={<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`Extrinsic ${formatExtrinsicId(extrinsicId)}`} />
			) : (
				<>
					<DetailsLayout.Container>
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Timestamp" />
							<DetailsLayout.Data>
								<div className="flex space-x-2">
									<div>
										<ClockIcon className="h-5 w-5" />
									</div>
									{/* @FIXME: Unhandled runtime error occurs when `extrinsic.block` is null */}
									<div>
										{moment(extrinsic?.block?.timestamp).format("LLL")}{" "}
										<TimeAgo
											timestamp={extrinsic?.block?.timestamp}
											timeAgoClassName="ml-3 text-xs"
										/>
									</div>
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Block" />
							<DetailsLayout.Data dataClassName="!text-indigo-500">
								<div className="flex items-center space-x-2">
									<div>
										<Link href={`/block/${data.block.height}`}>
											{data.block.height}
										</Link>
									</div>

									{blockConfirmations && (
										<div className="text-white">
											<span className="font-semibold">
												{blockConfirmations}
											</span>{" "}
											{blockConfirmations === 1
												? "Block Confirmation"
												: "Block Confirmations"}
										</div>
									)}
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Status" />
							<DetailsLayout.Data>
								<div className="flex flex-row space-x-3">
									<BlockFinalizedIcon
										status={extrinsicSuccess}
										isExtrinsic={true}
									/>
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Hash" />
							<DetailsLayout.Data>{extrinsic.hash}</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Method" />
							<DetailsLayout.Data>{extrinsic.calls[0].name}</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<TransactionActions
							events={extrinsic.events}
							isSuccess={extrinsicSuccess}
						/>

						<Fee events={extrinsic.events} height={extrinsic?.block?.height} />

						{extrinsic?.signature?.signature && (
							<DetailsLayout.Wrapper>
								<DetailsLayout.Title title="Signature" />
								<DetailsLayout.Data dataClassName="break-all">
									{extrinsic.signature.signature}
								</DetailsLayout.Data>
							</DetailsLayout.Wrapper>
						)}
					</DetailsLayout.Container>

					<Events events={extrinsic.events} />
				</>
			)}
		</ContainerLayout>
	);
}

const Fee = ({ events, height }) => {
	const feePaid = events?.find((event) =>
		event.name.includes("TransactionPayment.TransactionFeePaid")
	)?.args;

	const getGasToken = () => {
		if (!ROOT_GAS_TOKEN_PRE_BLOCK) return "XRP";

		return height <= ROOT_GAS_TOKEN_PRE_BLOCK ? "ROOT" : "XRP";
	};

	return (
		<>
			{feePaid && (
				<DetailsLayout.Wrapper>
					<DetailsLayout.Title title="Fee" />
					<DetailsLayout.Data>
						{formatBalance(feePaid.actualFee, 6)} {getGasToken()}
					</DetailsLayout.Data>
				</DetailsLayout.Wrapper>
			)}
		</>
	);
};

const Events = ({ events }) => {
	const [viewArgs, toggleArgs] = useToggleArgs();

	return (
		<div className="mt-8 flex flex-col">
			<div className="-my-2 sm:-mx-6 lg:-mx-8">
				<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div className="overflow-scroll border border-gray-400">
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Event ID" />
									<TableLayout.HeadItem text="Action" />
									<TableLayout.HeadItem text="Phase" />
									<TableLayout.HeadItem text="Args" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{events.map((event, key) => (
									<tr key={key}>
										<TableLayout.Data>
											{formatExtrinsicId(event.id)}
										</TableLayout.Data>

										<TableLayout.Data dataClassName="space-y-4">
											{event.name}

											{viewArgs.includes(key) && (
												<div className="max-h-32 max-w-xl overflow-scroll rounded bg-gray-900 bg-opacity-30 p-2 text-xs text-white">
													<JSONViewer data={event.args} />
												</div>
											)}
										</TableLayout.Data>

										<TableLayout.Data>{event.phase}</TableLayout.Data>

										<TableLayout.Data>
											<button
												onClick={() => toggleArgs(key)}
												className={
													"inline-flex items-center border border-indigo-500 px-4 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												}
											>
												{viewArgs.includes(key) ? "Hide" : "View"}
											</button>
										</TableLayout.Data>
									</tr>
								))}
							</tbody>
						</TableLayout.Table>
					</div>
				</div>
			</div>
		</div>
	);
};

const useToggleArgs = () => {
	const [viewArgs, setViewArgs] = useState([]);

	const toggleArgs = (key) => {
		setViewArgs((prev) => {
			const indexOfKey = prev.indexOf(key);

			if (indexOfKey !== -1) return prev.filter((item) => item !== key);

			return prev.concat(key);
		});
	};

	return [viewArgs, toggleArgs];
};
