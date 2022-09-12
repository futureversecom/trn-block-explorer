import { CubeIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { formatAddress } from "@/libs/utils";
import { BlockFinalizedIcon, CopyToClipboard } from "@/components/icons";
import TimeAgo from "react-timeago";
import { useGetTransferByHashQuery } from "@/libs/api/generated.ts";
import { ethers } from "ethers";
import Link from "next/link";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	DetailsLayout,
} from "@/components";
import { usePolling, useExtrinsicId } from "@/libs/hooks";

export const getServerSideProps = (context) => ({
	props: { hash: context?.params?.hash },
});

export default function Transfer({ hash }) {
	let query = usePolling({}, useGetTransferByHashQuery, {
		hash,
	});

	query.data = query?.data?.transfers?.transfers[0];

	const id = useExtrinsicId(query.data?.extrinsicHash);

	return (
		<ContainerLayout>
			<PageHeader
				title={`Transfer # ${formatAddress(hash, 12)}`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`Transfer ${hash}`} />
			) : (
				<DetailsLayout.Container>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Transaction Hash" />
						<DetailsLayout.Data dataClassName="flex flex-row">
							<div>{hash}</div>
							<div>
								<CopyToClipboard value={hash} />
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Block Height" />
						<DetailsLayout.Data>
							<Link href={`/block/${query.data.blockNumber}`}>
								<span className="cursor-pointer text-indigo-500">
									{query.data.blockNumber}
								</span>
							</Link>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Extrinsic ID" />
						<DetailsLayout.Data>
							{id ? (
								<Link href={`/extrinsic/${id.raw}`}>
									<span className="cursor-pointer text-sm text-indigo-500">
										{id.formatted}
									</span>
								</Link>
							) : (
								<span className="text-sm">{query.data.blockNumber}-</span>
							)}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							{moment(query.data.timestamp).format("LLL")}{" "}
							<span className="ml-3 text-xs">
								<TimeAgo date={query.data.timestamp} />
							</span>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Status" />
						<DetailsLayout.Data>
							<div className="flex flex-row space-x-3">
								<BlockFinalizedIcon status={true} />
								<span className="ml-2 text-sm">{query.data.status}</span>
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="From" />
						<DetailsLayout.Data dataClassName="flex flex-row">
							<Link href={`/account/${query.data.from?.id}`}>
								<span className="cursor-pointer text-sm text-indigo-500">
									{query.data.from?.id}
								</span>
							</Link>
							<CopyToClipboard value={query.data.from?.id} />
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="To" />
						<DetailsLayout.Data dataClassName="flex flex-row">
							<Link href={`/account/${query.data.to?.id}`}>
								<span className="cursor-pointer text-sm text-indigo-500">
									{query.data.to?.id}
								</span>
							</Link>
							<CopyToClipboard value={query.data.to?.id} />
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Amount" />
						<DetailsLayout.Data>
							{ethers.utils.formatEther(query.data.amount)} Root
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
