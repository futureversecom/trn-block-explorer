import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { Fragment } from "react";

import AddressLink from "@/components/evm/AddressLink";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { getERC20TransferForAddress } from "@/libs/evm-api";
import { usePages } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

import { getContractDataForAddress } from "../libs/evm-api";
import {
	InOutLabel,
	LoadingBlock,
	Pagination,
	TableLayout,
	TextLink,
	TimeAgo,
} from "./";

const PaginationTable = "accountErc20Transfers";

export default function Erc20TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination(PaginationTable);

	const queryTxs = useQuery(
		["erc20_transfers", walletAddress, currentPage],
		() => {
			return getERC20TransferForAddress(walletAddress, currentPage);
		},
		{
			refetchInterval: 15_000,
		}
	);
	const queryContractDetails = useQuery(
		["evm_transactions_contract_data", walletAddress],
		() => {
			return getContractDataForAddress(walletAddress);
		},
		{
			refetchInterval: 85_000,
		}
	);
	const contractData = queryContractDetails?.data?.contractData;
	const queryTxsData = queryTxs?.data?.docs;
	const dataDocs = queryTxsData
		? queryTxsData.map((tx) => {
				const fromContract = contractData?.find(
					(data) => data.address === tx.from
				);
				const toContract = contractData?.find((data) => data.address === tx.to);
				if (fromContract) {
					return { ...tx, fromContract: [fromContract] };
				} else if (toContract) {
					return { ...tx, toContract: [toContract] };
				}
				return tx;
		  })
		: null;
	const query = dataDocs
		? {
				...queryTxs,
				data: { docs: dataDocs, totalPages: queryTxs.data.totalPages },
		  }
		: queryTxs;
	usePages(PaginationTable, query?.data?.totalPages);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="ERC20 Transfers" height="h-20" />
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
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Value" />
									<TableLayout.HeadItem text="Token" />
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
									let contractData;
									if (typeof currentArg?.contractData == "object") {
										if (
											Object.getPrototypeOf(currentArg?.contractData) ===
											Object.prototype
										) {
											contractData = currentArg?.contractData;
										} else {
											contractData = currentArg?.contractData?.[0];
										}
									}

									currentArg.contractData = contractData;
									const name = `${
										contractData?.name ? contractData?.name : "?"
									} (${contractData?.symbol ? contractData?.symbol : "?"})`;

									return (
										<EvmTransactionsForAddressRow
											key={key}
											transactionHash={tx?.transactionHash || tx?.hash}
											tx={tx}
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={currentArg?.args?.to}
											from={currentArg?.args?.from}
											isDeployment={tx?.creates || false}
											type={type}
											name={name}
											fromContract={tx?.fromContract?.[0]}
											toContract={tx?.toContract?.[0]}
											value={ethers.utils
												.formatUnits(
													currentArg?.args?.value,
													currentArg?.contractData?.decimals
												)
												.toString()}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No ERC20 Transfers</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table={PaginationTable} />}
		</div>
	);
}

const EvmTransactionsForAddressRow = ({
	timestamp,
	from,
	transactionHash,
	to,
	toContract,
	fromContract,
	type,
	name,
	value,
	tx,
}) => {
	return (
		<tr>
			<TableLayout.Data dataClassName="my-auto">
				<TransactionStatus tx={tx} />
			</TableLayout.Data>
			<TableLayout.Data>
				<TextLink
					link={`/tx/${transactionHash}`}
					text={formatAddress(transactionHash, 3)}
				/>
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
			<TableLayout.Data>
				<span className="text-xs">{value}</span>
			</TableLayout.Data>
			<TableLayout.Data>{name}</TableLayout.Data>
		</tr>
	);
};
