import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import Link from "next/link";
import { Fragment, useEffect, useMemo } from "react";

import { LoadingBlock, Pagination, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { BlockFinalizedIcon } from "@/components/icons";
import { getERC20TransferForAddress } from "@/libs/evm-api";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function Erc20TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountEvmTransactions");

	const query = useQuery(
		["erc20_transfers", walletAddress, currentPage],
		async () => {
			const data = await getERC20TransferForAddress(walletAddress);
			console.log("erc20", data);
			return data;
		}
	);

	const pageSlice = useMemo(() => (currentPage - 1) * 10, [currentPage]);

	useAccountRefetchStatus("accountEvmTransactions", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="ERC20 Transfers" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.docs?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Tx Hash" />
									<TableLayout.HeadItem text="Status" />
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
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={currentArg?.args?.to}
											isDeployment={tx?.creates || false}
											type={type}
											name={name}
											fromContract={tx?.fromContract}
											toContract={tx?.toContract}
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

			{pages?.length > 1 && <Pagination table="accountEvmTransactions" />}
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
	isDeployment,
	name,
	value,
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
			<TableLayout.Data>
				<span className="text-xs">{value}</span>
			</TableLayout.Data>
			<TableLayout.Data>{name}</TableLayout.Data>
		</tr>
	);
};
