import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import TimeAgo from "react-timeago";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TableLayout,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import {
	GetExtrinsicByRegexDocument,
	GetExtrinsicIdFromHashDocument,
	useGetExtrinsicQuery,
} from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";
import { ROOT_GAS_TOKEN_PRE_BLOCK } from "@/libs/constants";
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
		!extrinsicId?.startsWith("0x") &&
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
	const data = query?.data?.archive?.extrinsic_by_pk;

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
								{/* @FIXME: Unhandled runtime error occurs when `data.block` is null */}
								{moment(data?.block?.timestamp).format("LLL")}{" "}
								<span className="ml-3 text-xs">
									<TimeAgo date={data?.block?.timestamp} />
								</span>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Block" />

							<DetailsLayout.Data dataClassName="!text-indigo-500">
								<Link href={`/block/${data?.block?.height}`}>
									{data?.block?.height}
								</Link>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Status" />
							<DetailsLayout.Data>
								<div className="flex flex-row space-x-3">
									<BlockFinalizedIcon status={true} />
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Hash" />
							<DetailsLayout.Data>{data.hash}</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Method" />
							<DetailsLayout.Data>{data.calls[0].name}</DetailsLayout.Data>
						</DetailsLayout.Wrapper>

						<Fee events={data.events} height={data?.block?.height} />

						{data?.signature?.signature && (
							<DetailsLayout.Wrapper>
								<DetailsLayout.Title title="Signature" />
								<DetailsLayout.Data dataClassName="break-all">
									{data.signature.signature}
								</DetailsLayout.Data>
							</DetailsLayout.Wrapper>
						)}
					</DetailsLayout.Container>

					<Events events={data.events} />
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
													<JSONPretty data={event.args} />
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
