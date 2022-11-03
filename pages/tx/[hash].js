import { CubeIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import Link from "next/link";

import {
	ContainerLayout,
	DetailsLayout,
	ElapsedTime,
	LoadingBlock,
	PageHeader,
} from "@/components";
import { useGetEvmTransactionByHashQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { formatAddress } from "@/libs/utils";

export const getServerSideProps = (context) => ({
	props: { hash: context?.params?.hash },
});

export default function EVMTransaction({ hash }) {
	let query = usePolling({}, useGetEvmTransactionByHashQuery, {
		txHash: hash,
	});

	const transaction = query?.data?.archive?.frontier_ethereum_transaction?.[0];

	const ethData = transaction?.call?.extrinsic?.events?.find(
		(e) => e.name === "Ethereum.Executed"
	);

	const ethArgsData = transaction?.call?.args?.transaction?.value;
	const type = transaction?.call?.args?.transaction?.__kind;

	const data = {
		txHash: ethData?.args?.transactionHash,
		block: transaction?.call?.block?.height,
		timestamp: transaction?.call?.block?.timestamp,
		from: ethData?.args?.from,
		to: ethData?.args?.to,
		type,
		input: ethArgsData?.input,
		nonce: ethArgsData?.nonce,
		value: ethArgsData?.value,
		gasLimit: ethArgsData?.gasLimit,
		maxFeePerGas: ethArgsData?.maxFeePerGas,
		maxPriorityFeePerGas: ethArgsData?.maxPriorityFeePerGas,
	};

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
						<DetailsLayout.Data>{data.txHash}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Block Height" />
						<DetailsLayout.Data>
							<Link href={`/block/${data.block}`}>
								<span className="cursor-pointer text-indigo-500">
									{data.block}
								</span>
							</Link>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							<ElapsedTime timestamp={data.timestamp} />
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Limit" />
						<DetailsLayout.Data>{data?.gasLimit[0]}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Nonce" />
						<DetailsLayout.Data>{data.nonce[0]}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Input" />
						<DetailsLayout.Data>{data.input}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Value" />
						<DetailsLayout.Data>
							{ethers.utils.formatEther(data.value[0])}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Type" />
						<DetailsLayout.Data>{data.type}</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
