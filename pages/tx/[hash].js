import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpIcon, CubeIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import moment from "moment";
import Link from "next/link";
import { Fragment, useState } from "react";

import {
	ContainerLayout,
	DetailsLayout,
	LoadingBlock,
	PageHeader,
	TimeAgo,
} from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import EventComponents from "@/components/evm/events/index.js";
import GasUsage from "@/components/evm/GasUsage";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { CopyToClipboard } from "@/components/icons";
import { getTransactionByHash } from "@/libs/evm-api";
import { formatAddress, formatUnits } from "@/libs/utils";

export const getServerSideProps = (context) => ({
	props: { hash: context?.params?.hash },
});

export default function EVMTransaction({ hash }) {
	const [showMore, setShowMore] = useState(false);
	const query = useQuery([hash], () => {
		return getTransactionByHash(hash).then((data) => {
			return data;
		});
	});

	const parsedData = query?.data?.parsedData;

	return (
		<ContainerLayout>
			<PageHeader title={`Transaction Details`} />
			{query.isLoading || query.isError ? (
				<LoadingBlock title={`EVM Transaction ${hash}`} />
			) : (
				<DetailsLayout.Container>
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Transaction Hash" />
						<DetailsLayout.Data dataClassName="flex space-x-1">
							<span>{query?.data?.transactionHash || query?.data?.hash} </span>
							<CopyToClipboard
								value={query?.data?.transactionHash || query?.data?.hash}
							/>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Status" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
								<TransactionStatus tx={query?.data} />
								{query?.data.status == 0 && (
									<div className="flex space-x-3">
										{query?.data?.error && (
											<span className="inline-flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
												Revert Message: {query?.data?.error}
											</span>
										)}
									</div>
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
								<div className="flex flex-col space-y-3">
									{query?.data?.parsedLogs.map((log) => {
										const allowed = ["ERC20", "ERC1155", "ERC721"];
										if (!allowed.includes(log?.parsedFromAbi))
											return (
												<Fragment
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);

										if (
											log?.name == "Transfer" &&
											log?.parsedFromAbi == "ERC721"
										) {
											return (
												<EventComponents.Transfer
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										if (
											log?.name == "ApprovalForAll" &&
											(log?.parsedFromAbi == "ERC721" ||
												log?.parsedFromAbi == "ERC1155")
										) {
											return (
												<EventComponents.ApprovalForAll
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										if (
											log?.name == "Approval" &&
											log?.parsedFromAbi == "ERC721"
										) {
											return (
												<EventComponents.ERC721Approval
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										if (
											log?.name == "TransferBatch" &&
											log?.parsedFromAbi == "ERC1155"
										) {
											return (
												<EventComponents.TransferBatch
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										if (
											log?.name == "TransferSingle" &&
											log?.parsedFromAbi == "ERC1155"
										) {
											return (
												<EventComponents.TransferSingle
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}
										if (
											log?.name == "Transfer" &&
											log?.parsedFromAbi == "ERC20"
										) {
											return (
												<EventComponents.ERC20Transfer
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										if (
											log?.name == "Approval" &&
											log?.parsedFromAbi == "ERC20"
										) {
											return (
												<EventComponents.ERC20Approval
													log={log}
													key={`${log?.transactionHash}_${log?.logIndex}`}
												/>
											);
										}

										return (
											<Fragment
												key={`${log?.transactionHash}_${log?.logIndex}`}
											/>
										);
									})}
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					) : (
						<Fragment />
					)}

					{query?.data?.timestamp ? (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Timestamp" />
							<DetailsLayout.Data dataClassName="flex flex-col space-y-1">
								<div>
									{moment(query.data.timestamp * 1000).format("LLL")}{" "}
									<TimeAgo
										timestamp={query.data.timestamp * 1000}
										timeAgoClassName="ml-3 text-xs"
									/>
								</div>
								<div>
									{query?.data?.firstSeen && (
										<div className="space-x-1 text-xs">
											<span>Confirmed within:</span>
											<span>
												{moment(query?.data?.timestamp * 1000).diff(
													moment(query?.data?.firstSeen * 1000),
													"seconds"
												)}{" "}
												second(s)
											</span>
										</div>
									)}
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					) : (
						<Fragment />
					)}
					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="From" />
						<DetailsLayout.Data dataClassName="flex space-x-1">
							<AddressLink
								address={query?.data?.from}
								contractData={query?.data?.fromContract}
								showNameAndSymbol
							/>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					{query?.data?.to ? (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Interacted with (To)" />
							<DetailsLayout.Data dataClassName="flex space-x-1">
								<AddressLink
									address={query?.data?.to}
									contractData={query?.data?.toContract}
									showNameAndSymbol
								/>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					) : (
						<Fragment />
					)}

					{query?.data?.status == 0 ||
						(query?.data?.status == 1 && (
							<DetailsLayout.Wrapper>
								<DetailsLayout.Title title="Transaction Fee" />
								<DetailsLayout.Data>
									<GasUsage tx={query?.data} />
								</DetailsLayout.Data>
							</DetailsLayout.Wrapper>
						))}

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Gas Limit & Usage" />
						<DetailsLayout.Data>
							{ethers.utils.commify(query?.data?.gasLimit)} /{" "}
							{query?.data?.gasUsed ? (
								<Fragment>
									{ethers.utils.commify(query?.data?.gasUsed)}
									<Fragment>
										{" "}
										(
										{(
											(query?.data?.gasUsed / query?.data?.gasLimit) *
											100
										).toFixed(2)}{" "}
										%)
									</Fragment>
								</Fragment>
							) : (
								"?"
							)}
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
									Gwei
								</span>
								{query?.data?.type == 2 && (
									<span>
										Max:{" "}
										{ethers.utils
											.formatUnits(query?.data?.maxFeePerGas, "gwei")
											.toString()}{" "}
										Gwei
									</span>
								)}
								{query?.data?.type == 2 && (
									<span>
										Max Priority:{" "}
										{ethers.utils
											.formatUnits(query?.data?.maxPriorityFeePerGas, "gwei")
											.toString()}{" "}
										Gwei
									</span>
								)}
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Attributes" />
						<DetailsLayout.Data>
							<div className="flex space-x-3">
								<span className="my-auto rounded bg-black bg-opacity-20 p-1 text-xs">
									Txn Type: {query?.data?.type} (
									{query?.data?.type == 2 ? "EIP-1559" : "Legacy"})
								</span>
								<span className="my-auto rounded bg-black bg-opacity-20 p-1 text-xs">
									Nonce: {query?.data?.nonce}
								</span>
								<span className="my-auto rounded bg-black bg-opacity-20 p-1 text-xs">
									Position in Block: {query?.data?.transactionIndex}
								</span>
							</div>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					<DetailsLayout.Wrapper>
						<DetailsLayout.Title title="Value" />
						<DetailsLayout.Data>
							<span className="my-auto rounded bg-black bg-opacity-20 p-1 text-xs">
								{formatUnits(query.data.value, 18)} XRP
							</span>
						</DetailsLayout.Data>
					</DetailsLayout.Wrapper>

					{!showMore && (
						<div
							className="py-4 px-5 text-sm flex space-x-2 text-indigo-500 hover:text-white my-auto cursor-pointer"
							onClick={() => {
								setShowMore(true);
							}}
						>
							<div>Click to see More</div>
							<div>
								<ArrowDownIcon className="w-5 h-5 my-auto" />
							</div>
						</div>
					)}

					{showMore && (
						<DetailsLayout.Wrapper>
							<DetailsLayout.Title title="Input Data" />
							<DetailsLayout.Data>
								<div className="p-2 bg-black bg-opacity-20 rounded-md max-h-64 overflow-y-scroll">
									{parsedData ? (
										<div className="space-y-2 font-mono">
											<p>Function: {parsedData?.signature}</p>
											<p>MethodId: {parsedData?.sighash}</p>
											{parsedData?.args ? (
												<div className="flex flex-col">
													{Object.keys(parsedData.args).map((e) => (
														<div key={e} className="flex space-x-3">
															<div className="flex-shrink">{`[${e}]`}:</div>
															<div>{parsedData.args[e]}</div>
														</div>
													))}
												</div>
											) : (
												<Fragment />
											)}
										</div>
									) : (
										<span className="overflow-ellipsis">
											{query?.data?.data}
										</span>
									)}
								</div>
							</DetailsLayout.Data>
						</DetailsLayout.Wrapper>
					)}

					{showMore && (
						<div
							className="py-4 px-5 text-sm flex space-x-2 text-indigo-500 hover:text-white my-auto cursor-pointer"
							onClick={() => {
								setShowMore(false);
							}}
						>
							<div>Click to see Less</div>
							<div>
								<ArrowUpIcon className="w-5 h-5 my-auto" />
							</div>
						</div>
					)}
				</DetailsLayout.Container>
			)}
		</ContainerLayout>
	);
}
