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
import GasUsage from "@/components/evm/GasUsage";
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
							{query?.data?.transactionHash || query?.data?.hash}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Status" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
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
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>
					{query?.data?.blockNumber && (
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
					)}
					{query?.data?.parsedData?.name || query?.data?.creates ? (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Method" />
							<DetailsLayout.Data>
								{!query?.data?.to && query?.data?.creates ? (
									`Contract Deployment ${query?.data?.creates}`
								) : (
									<Fragment />
								)}
								<span className="capitalize">
									{query?.data?.parsedData?.name &&
										query?.data?.parsedData?.name}
								</span>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					) : (
						<Fragment />
					)}

					{query?.data?.parsedLogs?.length > 0 ? (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Events Occured" />
							<DetailsLayout.Data>
								<div className="flex space-x-1">
									{query?.data?.parsedLogs.map((log) => {
										let args = {};
										Object.keys(log?.args).map((key) => {
											if (isNaN(Number(key))) {
												const val = log?.args?.[key];
												const data = ethers.utils.isAddress(val) ? (
													<Link href={`/account/${val}`}>
														{formatAddress(val)}
													</Link>
												) : (
													val
												);
												args[key] = data;
											}
										});

										return (
											<span className="my-auto flex space-x-2">
												<span className="capitalize">{log?.parsedFromAbi}</span>
												<span>{log.name}</span>
												{Object.keys(args)?.map((key) => {
													const value = args[key];
													return (
														<Fragment>
															<span className="my-auto font-bold capitalize">
																{key}
															</span>
															<span className="my-auto capitalize">
																{value}
															</span>
														</Fragment>
													);
												})}
											</span>
										);
									})}
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					) : (
						<Fragment />
					)}

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Timestamp" />
						<DetailsLayout.Data>
							<div>
								{moment(query.data.timestamp * 1000).format("LLL")}{" "}
								<TimeAgo
									timestamp={query.data.timestamp * 1000}
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

					{/* <DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Value" />
						<DetailsLayout.Data>
							{query?.data?.value
								? ethers.utils.formatEther(query.data.value.toString())
								: 0}
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper> */}

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Transaction Fee" />
						<DetailsLayout.Data>
							<GasUsage tx={query?.data} />
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Limit & Usage" />
						<DetailsLayout.Data>
							{ethers.utils.commify(query?.data?.gasLimit)} /{" "}
							{ethers.utils.commify(query?.data?.gasUsed)} (
							{((query?.data?.gasUsed / query?.data?.gasLimit) * 100).toFixed(
								2
							)}{" "}
							%)
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Fees" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
								<span>
									Base:{" "}
									{ethers.utils
										.formatUnits(query?.data?.gasPrice, "gwei")
										.toString()}{" "}
									gwei
								</span>
								{query?.data?.type == 2 && (
									<span>
										Max:{" "}
										{ethers.utils
											.formatUnits(query?.data?.maxFeePerGas, "gwei")
											.toString()}{" "}
										gwei
									</span>
								)}
								{query?.data?.type == 2 && (
									<span>
										Max Priority:{" "}
										{ethers.utils
											.formatUnits(query?.data?.maxPriorityFeePerGas, "gwei")
											.toString()}{" "}
										gwei
									</span>
								)}
							</div>
						</DetailsLayout.Data>
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
