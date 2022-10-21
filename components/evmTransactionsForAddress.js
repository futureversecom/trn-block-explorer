import clsx from "clsx";
import Link from "next/link";
import { useEffect, useMemo } from "react";

import {
	AddressLink,
	LoadingBlock,
	Pagination,
	TableLayout,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import {
	useGetEvmTransactionsFromAddressQuery,
	useGetEvmTransactionsToAddressQuery,
} from "@/libs/api/generated";
import { usePolling, useTimeAgo } from "@/libs/hooks";
import {
	useAccountRefetchStatus,
	usePagination,
	useTickerAtom,
} from "@/libs/stores";
import { formatExtrinsicId } from "@/libs/utils";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountEvmTransactions");

	const query = useTransactions(walletAddress);
	const tick = useTickerAtom();

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
									<TableLayout.HeadItem text="Extrinsic" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Status" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query.data
									.slice(pageSlice, pageSlice + 10)
									.map((transaction, key) => {
										const call = transaction.call;

										const ethereumExecutedEvent = call.events.find(
											(event) => event.name === "Ethereum.Executed"
										);
										const { to, from } = ethereumExecutedEvent.args;

										return (
											<EvmTransactionsForAddressRow
												key={key}
												block={call.block}
												id={call.id}
												from={from}
												to={to}
												walletAddress={walletAddress}
												success={call.success}
												tick={tick}
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
	id,
	from,
	to,
	walletAddress,
	success,
	tick,
}) => {
	const timeAgo = useTimeAgo(block?.timestamp, tick);
	return (
		<tr>
			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/block/${block.height}`}>{block.height}</Link>
			</TableLayout.Data>

			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/extrinsic/${id}`}>{formatExtrinsicId(id)}</Link>
			</TableLayout.Data>

			<TableLayout.Data>
				{from?.toLowerCase() === walletAddress.toLowerCase() ? "Out" : "In"}
			</TableLayout.Data>

			<TableLayout.Data>{timeAgo}</TableLayout.Data>

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

			<TableLayout.Data dataClassName="flex">
				<BlockFinalizedIcon status={success} isExtrinsic={true} />
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
