import { CubeIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import moment from "moment";
import Link from "next/link";
import { Fragment } from "react";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TimeAgo,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetEvmTransactionByHashQuery } from "@/libs/api/generated.ts";
import { getTransactionByHash } from "@/libs/evm-api";
import { usePolling } from "@/libs/hooks";
import { formatAddress } from "@/libs/utils";

export const getServerSideProps = (context) => ({
	props: { hash: context?.params?.hash },
});

export default function EVMTransaction({ hash }) {
	const query = useQuery([hash], async () => {
		const data = await getTransactionByHash(hash);
		console.log(data);
		return data;
	});

	return (
		<ContainerLayout>
			<PageHeader
				title={`EVM Transaction # ${formatAddress(hash, 12)}`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`EVM Transaction ${hash}`} />
			) : (
				<DetailsLayout.Container>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Transaction Hash" />
						<DetailsLayout.Data>
							{query.data.transactionHash}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Status" />
						<DetailsLayout.Data>
							{query?.data?.status == 1 && (
								<span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
									Success
								</span>
							)}
							{query?.data.status == 0 && (
								<div className="flex space-x-3">
									<span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
										Reverted
									</span>
									{query?.data?.error && (
										<span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
											Revert Message: {query?.data?.error}
										</span>
									)}
								</div>
							)}
							{!query?.data?.status && !query?.data?.blockNumber ? (
								<span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
									Pending
								</span>
							) : (
								<Fragment />
							)}
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
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							<div>
								{moment(query.data.timestamp).format("LLL")}{" "}
								<TimeAgo
									timestamp={query.data.timestamp}
									timeAgoClassName="ml-3 text-xs"
								/>
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="From" />
						<DetailsLayout.Data>{query?.data?.from}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Interacted with (To)" />
						<DetailsLayout.Data>{query?.data?.to}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Value" />
						<DetailsLayout.Data>
							{query?.data?.value
								? ethers.utils.formatEther(query.data.value)
								: 0}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Transaction Fee" />
						<DetailsLayout.Data>{"????"}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Limit & Usage" />
						<DetailsLayout.Data>
							{query?.data?.gasLimit} / {query?.data?.gasUsed}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Fees" />
						<DetailsLayout.Data>{query.data.nonce}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Attributes" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
								<span className="my-auto rounded bg-gray-900 p-1 text-xs">
									Txn Type: {query?.data?.type} (
									{query?.data?.type == 2 ? "EIP-1559" : "Legacy"})
								</span>
								<span className="my-auto rounded bg-gray-900 p-1 text-xs">
									Nonce: {query?.data?.nonce}
								</span>
								<span className="my-auto rounded bg-gray-900 p-1 text-xs">
									Position in Block: {query?.data?.transactionIndex}
								</span>
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Input Data" />
						<DetailsLayout.Data>{query.data.nonce}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
