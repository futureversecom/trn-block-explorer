import {
	ChevronLeftIcon,
	ClockIcon,
	CubeIcon,
} from "@heroicons/react/24/outline";
import { isHex } from "@polkadot/util";
import moment from "moment";
import Link from "next/link";
import TimeAgo from "react-timeago";
import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import JSONViewer from "@/components/JSONViewer";
import { GetBlockDocument, useGetBlockQuery } from "@/libs/api/generated.ts";
import { graphQLClient } from "@/libs/client";
import { usePolling } from "@/libs/hooks";
import { formatExtrinsicId } from "@/libs/utils";

export const getServerSideProps = async (context) => {
	const numberOrHash = context?.params?.blockNumberOrHash;

	const returnNotFound = () => ({ notFound: true });

	const returnProp = async () => {
		const blockNumber = numberOrHash;
		try {
			const byBlockResponse = await graphQLClient.request(GetBlockDocument, {
				height: blockNumber,
			});
			// to make sure the block data exist otherwise, redirect to a notFound page
			return !byBlockResponse?.archive?.block.length
				? returnNotFound()
				: { props: { blockNumber } };
		} catch (error) {
			// to handle invalid numberOrHash value
			return returnNotFound();
		}
	};

	return !isHex(numberOrHash, 256) ? returnProp() : returnNotFound();
};

export default function BlockByNumber({ blockNumber }) {
	let query = usePolling({}, useGetBlockQuery, {
		height: parseInt(blockNumber),
	});

	query.data = query?.data?.archive?.block[0];

	const getPrevBlock = () => {
		if (parseInt(blockNumber) == 0) {
			return 0;
		} else {
			return parseInt(blockNumber) - 1;
		}
	};

	if (
		(!query.isLoading && !query.data) ||
		Number(blockNumber) >= Number.MAX_SAFE_INTEGER
	) {
		return "No data found";
	}

	return (
		<ContainerLayout>
			<PageHeader
				title={`Block # ${blockNumber}`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`Block ${blockNumber}`} />
			) : (
				<DetailsLayout.Container>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Height" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
								<div className="flex h-6 w-6 cursor-pointer space-x-3 border text-center">
									<Link href={`/block/${getPrevBlock()}`}>
										<ChevronLeftIcon className="mx-auto my-auto h-4 w-4" />
									</Link>
								</div>
								<div>
									{blockNumber == "0" ? (
										<span className="font-bold">GENESIS BLOCK</span>
									) : (
										blockNumber
									)}
								</div>
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							<div className="flex space-x-2">
								<div>
									<ClockIcon className="h-5 w-5" />
								</div>
								<div>
									{moment(query.data.timestamp).format("LLL")}{" "}
									<span className="text-xs">
										<TimeAgo date={query.data.timestamp} />
									</span>
								</div>
							</div>
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
						<DetailsLayout.Data>{query.data.hash}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Parent Hash" />
						<DetailsLayout.Data>
							<span className="cursor-pointer text-indigo-500">
								<Link href={`/block/${getPrevBlock()}`}>
									{query.data.parent_hash}
								</Link>
							</span>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="State Root" />
						<DetailsLayout.Data>{query.data.state_root}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Extrinsics Root" />
						<DetailsLayout.Data>
							{query.data.extrinsics_root}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					{query?.data?.extrinsics?.length > 0 && (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Extrinsics" />
							<DetailsLayout.Data>
								<ul>
									{query.data.extrinsics.map((extrinsic, i) => (
										<li className="cursor-pointer text-indigo-500" key={i}>
											<Link href={`/extrinsic/${extrinsic.id}`}>
												{formatExtrinsicId(extrinsic.id)}
											</Link>
										</li>
									))}
								</ul>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					)}

					{query?.data?.events?.length > 0 && (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Events" />
							<DetailsLayout.Data>
								<div className="h-64 overflow-scroll rounded bg-gray-900 bg-opacity-30 p-2">
									<JSONViewer data={query.data.events} />
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					)}

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Spec Version" />
						<DetailsLayout.Data>{query.data.spec_id}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
