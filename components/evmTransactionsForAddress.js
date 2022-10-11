import clsx from "clsx";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import TimeAgo from "react-timeago";

import {
	AddressLink,
	LoadingBlock,
	Pagination,
	TableLayout,
} from "@/components";
import { useAccountRefetchStatus, usePagination, useEvmTransactions } from "@/libs/stores";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountEvmTransactions");

	const query = useTransactions(walletAddress);

	const pageSlice = useMemo(() => (currentPage - 1) * 10, [currentPage]);

	useAccountRefetchStatus("accountEvmTransactions", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Evm Transactions" height="h-20" />
			) : (
				<div className="divide-y border border-gray-400 text-white">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query.data
									.slice(pageSlice, pageSlice + 10)
									.map((transaction, key) => {
										const call = transaction.call;
										console.log("transaction.contract", transaction.contract)

										const ethereumExecutedEvent = call.events.find(
											(event) => event.name === "Ethereum.Executed"
										);
										const { to, from } = ethereumExecutedEvent.args;

										return (
											<tr key={key}>
												<TableLayout.Data dataClassName="!text-indigo-500">
													<Link href={`/block/${call.block.height}`}>
														{call.block.height}
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>
													{from?.toLowerCase() === walletAddress.toLowerCase()
														? "Out"
														: "In"}
												</TableLayout.Data>

												<TableLayout.Data>
													<TimeAgo date={call.block.timestamp} />
												</TableLayout.Data>

												<TableLayout.Data
													dataClassName={clsx(
														from !== walletAddress.toLowerCase() && "!text-indigo-500"
													)}
												>
													<AddressLink
														address={from}
														isAccount={from === walletAddress.toLowerCase()}
													/>
												</TableLayout.Data>

												<TableLayout.Data
													dataClassName={clsx(
														to !== walletAddress.toLowerCase() && "!text-indigo-500"
													)}
												>
													<AddressLink
														address={to}
														isAccount={to === walletAddress.toLowerCase()}
													/>
												</TableLayout.Data>
											</tr>
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

const useTransactions = (address) => {
	const { evmTransactions, evmTransactionsForAddress, isLoading } = useEvmTransactions(address);

	console.log({evmTransactionsForAddress, evmTransactions})

	usePages(evmTransactionsForAddress?.length);

	return { data: evmTransactionsForAddress, isLoading };
};

const usePages = (transferCount) => {
	const { setPages } = usePagination("accountEvmTransactions");

	useEffect(() => {
		if (!transferCount) return;

		setPages(Array.from(Array(Math.ceil(transferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transferCount]);
};
