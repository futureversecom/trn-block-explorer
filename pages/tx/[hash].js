import { CubeIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import moment from "moment";
import Link from "next/link";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TimeAgo,
} from "@/components";
import { useGetEvmTransactionByHashQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { formatAddress } from "@/libs/utils";
import { getTransactionByHash } from "@/libs/evm-api";
import { useQuery } from '@tanstack/react-query'

export const getServerSideProps = (context) => ({
	props: { hash: context?.params?.hash },
});

export default function EVMTransaction({ hash }) {
	const query = useQuery([hash], async () => {
		const data = await getTransactionByHash(hash);
		console.log(data);
		return data;
	})

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
						<DetailsLayout.Data>{query.data.transactionHash}</DetailsLayout.Data>
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
						<DetailsLayout.Title title="Gas Limit" />
						<DetailsLayout.Data>{query?.data?.gasLimit}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Nonce" />
						<DetailsLayout.Data>{query.data.nonce}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Input" />
						<DetailsLayout.Data>
							<p className="truncate">{query.data.input}</p>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Value" />
						<DetailsLayout.Data>
							{query?.data?.value ? ethers.utils.formatEther(query.data.value) : 0}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Type" />
						<DetailsLayout.Data>{query?.data?.type}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
