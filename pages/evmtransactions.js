import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
	TimeAgo,
} from "@/components";
import TransactionStatus from "@/components/evm/TransactionStatus";
import BlockFinalizedIcon from "@/components/icons/blockFinalizedIcon";
import { useGetEvmTransactionsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress, formatExtrinsicId } from "@/libs/utils";

export default function EVMTransactions() {
	const query = useQuery(20);
	const { pages } = usePagination("evmtransactions");

	return (
		<ContainerLayout>
			<PageHeader
				title={`EVM Transactions`}
				icon={<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"EVM Transactions"} />
			) : (
				<div className="mt-0 flex flex-col">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-auto border border-gray-400">
								<TableLayout.Table>
									<thead className="bg-transparent text-white">
										<tr>
											<TableLayout.HeadItem text="Id" />
											<TableLayout.HeadItem text="Tx Hash" />
											<TableLayout.HeadItem text="Status" />
											{/* <TableLayout.HeadItem text="Hash" /> */}
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Age" />
											<TableLayout.HeadItem text="From" />
											<TableLayout.HeadItem text="To" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data?.map((tx, key) => {
											const ethereumExecutedEvent =
												tx?.call?.extrinsic?.events?.find(
													(event) => event.name === "Ethereum.Executed"
												);

											const { to, from, transactionHash } =
												ethereumExecutedEvent?.args || {
													to: null,
													from: null,
													transactionHash: null,
												};

											return (
												<EVMTransactionsRow
													key={key}
													tx={tx}
													transactionHash={transactionHash}
													from={from}
													to={to}
												/>
											);
										})}
									</tbody>
								</TableLayout.Table>
							</div>
						</div>
					</div>
				</div>
			)}

			{pages?.length > 1 && <Pagination table="evmtransactions" />}
		</ContainerLayout>
	);
}

const EVMTransactionsRow = ({ tx, transactionHash, from, to }) => {
	return (
		<tr>
			<TableLayout.Data>
				<Link href={`/extrinsic/${tx.call.extrinsic.id}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatExtrinsicId(tx.call.extrinsic.id)}
					</span>
				</Link>
			</TableLayout.Data>
			<TableLayout.Data>{formatAddress(transactionHash)}</TableLayout.Data>
			<TableLayout.Data dataClassName="flex">
				<TransactionStatus tx={tx} />
			</TableLayout.Data>
			{/* <TableLayout.Data>
														{formatAddress(tx.call.extrinsic.hash, 6)}
													</TableLayout.Data> */}
			<TableLayout.Data>
				<Link href={`/block/${tx.call.block.height}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{tx.call.block.height}
					</span>
				</Link>
			</TableLayout.Data>
			<TableLayout.Data>
				<TimeAgo timestamp={tx.call.block.timestamp} />
			</TableLayout.Data>
			<TableLayout.Data>
				<Link href={`/account/${from}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(from)}
					</span>
				</Link>
			</TableLayout.Data>

			<TableLayout.Data>
				<Link href={`/account/${to}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(to)}
					</span>
				</Link>
			</TableLayout.Data>
		</tr>
	);
};

const useQuery = (limit) => {
	const { currentPage } = usePagination("evmtransactions");

	const query = usePolling({}, useGetEvmTransactionsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(query.data, limit);

	// Prefetch next page
	usePolling({}, useGetEvmTransactionsQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.archive?.frontier_ethereum_transaction,
	};
};

const usePages = (data, limit) => {
	const { setPages } = usePagination("evmtransactions");

	useEffect(() => {
		if (!data?.archive?.frontier_ethereum_transaction_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.ceil(
						data?.archive?.frontier_ethereum_transaction_aggregate?.aggregate
							?.count / limit
					)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.archive?.frontier_ethereum_transaction_aggregate]);
};
