import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Fragment, useState } from "react";

import { LoadingBlock, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import EVMPagination from "@/components/evm/evmpagination";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { getERC721TransferForAddress } from "@/libs/evm-api";
import { formatAddress } from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function Erc721TransfersForAddress({ walletAddress }) {
	const [page, setPage] = useState(1);

	const query = useQuery(
		["erc721_transfers", walletAddress, page],
		() => {
			return getERC721TransferForAddress(walletAddress, page);
		},
		{
			refetchInterval: 15_000,
		}
	);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="ERC721 Transfers" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.docs?.length ? (
						<div className="px-3 py-3 text-sm">
							Displaying {parseInt(query?.data?.limit * query?.data?.page)} from
							a total of {query?.data?.totalDocs} transfers
						</div>
					) : (
						<Fragment />
					)}
					{query?.data?.docs?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Status" />
									<TableLayout.HeadItem text="Tx Hash" />
									{/* <TableLayout.HeadItem text="Method" /> */}
									<TableLayout.HeadItem text="Block" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Name" />
									<TableLayout.HeadItem text="TokenId" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query?.data?.docs?.map((tx, key) => {
									let type;
									let currentArg = tx?.parsedLogs;
									if (currentArg?.args?.from == walletAddress) {
										type = "out";
									}
									if (currentArg?.args?.to == walletAddress) {
										type = "in";
									}
									if (currentArg?.args?.to == currentArg?.args?.from) {
										type = "self";
									}
									const contractData =
										Object.getPrototypeOf(currentArg?.contractData) ===
										Object.prototype
											? currentArg?.contractData
											: currentArg?.contractData?.[0];

									currentArg.contractData = contractData;
									const name = `${contractData?.name} (${contractData?.symbol})`;
									return (
										<EvmTransactionsForAddressRow
											key={key}
											transactionHash={tx?.transactionHash || tx?.hash}
											tx={tx}
											block={tx?.blockNumber}
											from={currentArg?.args?.from}
											// method={tx?.parsedData?.name || " - "}
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={currentArg?.args?.to}
											isDeployment={tx?.creates || false}
											walletAddress={walletAddress}
											success={tx?.status == 1 ? true : false}
											type={type}
											value={tx?.value}
											tokenId={currentArg?.args?.tokenId}
											name={name}
											fromContract={tx?.fromContract}
											toContract={tx?.toContract}
											log={currentArg}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No ERC721 Transfers</div>
					)}
				</div>
			)}

			<EVMPagination data={query?.data} onPageChange={(p) => setPage(p)} />
		</div>
	);
}

const EvmTransactionsForAddressRow = ({
	block,
	timestamp,
	from,
	transactionHash,
	to,
	tokenId,
	toContract,
	fromContract,
	type,
	isDeployment,
	name,
	log,
	tx,
}) => {
	return (
		<tr>
			<TableLayout.Data dataClassName="my-auto">
				<TransactionStatus tx={tx} />
			</TableLayout.Data>
			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/tx/${transactionHash}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(transactionHash, 3)}
					</span>
				</Link>
			</TableLayout.Data>

			<TableLayout.Data>
				{block ? (
					<Link href={`/block/${block}`}>
						<span className="cursor-pointer text-indigo-500 hover:text-white">
							{block}
						</span>
					</Link>
				) : (
					"-"
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				{timestamp ? <TimeAgo timestamp={timestamp * 1000} /> : "?"}
			</TableLayout.Data>

			<TableLayout.Data>
				{from ? (
					<div className="flex space-x-2">
						<AddressLink
							address={from}
							contractData={fromContract}
							format
							hideCopyButton
						/>
					</div>
				) : (
					" - "
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				<InOutLabel type={type} />
			</TableLayout.Data>

			<TableLayout.Data>
				{to ? (
					<div className="flex space-x-2">
						{isDeployment && <div>Created</div>}
						<AddressLink
							address={to}
							contractData={toContract}
							format
							hideCopyButton
						/>
					</div>
				) : (
					<Fragment />
				)}
			</TableLayout.Data>
			<TableLayout.Data>{name}</TableLayout.Data>
			<TableLayout.Data>{tokenId}</TableLayout.Data>
			<TableLayout.Data>
				<DisplayNFTImage
					key={log?.args?.tokenId}
					args={log?.args}
					uri={log?.contractData?.uri}
					width={75}
					height={75}
				/>
			</TableLayout.Data>
		</tr>
	);
};
