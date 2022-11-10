import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import Link from "next/link";
import { Fragment, useEffect, useMemo } from "react";

import { LoadingBlock, Pagination, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import { BlockFinalizedIcon } from "@/components/icons";
import {
	useGetEvmTransactionsFromAddressQuery,
	useGetEvmTransactionsToAddressQuery,
} from "@/libs/api/generated";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { usePolling } from "@/libs/hooks";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountEvmTransactions");

	// const query = useTransactions(walletAddress);

	const query = useQuery(
		["evm_transactions", walletAddress, currentPage],
		async () => {
			const data = await getTransactionsForAddress(walletAddress);
			return data;
		}
	);

	const pageSlice = useMemo(() => (currentPage - 1) * 10, [currentPage]);

	useAccountRefetchStatus("accountEvmTransactions", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Evm Transactions" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.docs?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Status" />
									<TableLayout.HeadItem text="Tx Hash" />
									<TableLayout.HeadItem text="Method" />
									<TableLayout.HeadItem text="Block" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Value" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query?.data?.docs?.map((tx, key) => {
									let type;
									if (tx?.from == walletAddress) {
										type = "out";
									}
									if (tx?.to == walletAddress) {
										type = "in";
									}
									if (tx?.to == tx?.from) {
										type = "self";
									}
									return (
										<EvmTransactionsForAddressRow
											key={tx?.transactionHash || tx?.hash || key}
											transactionHash={tx?.transactionHash || tx?.hash}
											block={tx?.blockNumber}
											from={tx?.from}
											method={tx?.parsedData?.name || " - "}
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={tx?.to || tx?.creates}
											isDeployment={tx?.creates || false}
											walletAddress={walletAddress}
											success={tx?.status == 1 ? true : false}
											type={type}
											value={tx?.value}
											fromContract={tx?.fromContract}
											toContract={tx?.toContract}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No EVM Transactions</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table="accountEvmTransactions" />}
		</div>
	);
}

const EvmTransactionsForAddressRow = ({
	block,
	method,
	timestamp,
	from,
	transactionHash,
	to,
	walletAddress,
	toContract,
	fromContract,
	success,
	type,
	value,
	isDeployment,
}) => {
	return (
		<tr>
			<TableLayout.Data dataClassName="flex">
				<BlockFinalizedIcon status={success} isExtrinsic={true} />
			</TableLayout.Data>
			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/tx/${transactionHash}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(transactionHash)}
					</span>
				</Link>
			</TableLayout.Data>

			<TableLayout.Data>
				<span className="inline-flex items-center rounded bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-100 capitalize">
					{method || " - "}
				</span>
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

			<TableLayout.Data>
				{ethers.utils.formatEther(String(value || 0)).toString()} XRP
			</TableLayout.Data>
		</tr>
	);
};

const useTransactions = (address) => {
	const toQuery = usePolling(
		{},
		useGetEvmTransactionsToAddressQuery,
		{
			address: address.toLowerCase(),
		},
		12000
	);

	const fromQuery = usePolling(
		{},
		useGetEvmTransactionsFromAddressQuery,
		{
			address: address.toLowerCase(),
		},
		12000
	);

	const data = useMemo(() => {
		const allTransactions = [
			...(toQuery?.data?.archive?.frontier_ethereum_transaction ?? []),
			...(fromQuery?.data?.archive?.frontier_ethereum_transaction ?? []),
		].sort((a, b) =>
			a.call.block.timestamp < b.call.block.timestamp ? 1 : -1
		);

		return allTransactions.reduce((transactions, curr) => {
			const duplicateIndex = transactions.findIndex(
				(transaction) => transaction.call.id === curr.call.id
			);
			if (duplicateIndex !== -1) return transactions;

			return transactions.concat(curr);
		}, []);
	}, [toQuery?.data, fromQuery?.data]);

	usePages(data?.length);

	return {
		data,
		isLoading: toQuery?.isLoading || fromQuery?.isLoading,
		isRefetching: toQuery?.isRefetching || fromQuery?.isRefetching,
	};
};

const usePages = (transferCount) => {
	const { setPages } = usePagination("accountEvmTransactions");

	useEffect(() => {
		if (!transferCount) return;

		setPages(Array.from(Array(Math.ceil(transferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transferCount]);
};
