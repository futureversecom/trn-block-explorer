import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import TimeAgo from "react-timeago";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
} from "@/components";
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
											<TableLayout.HeadItem text="Status" />
											<TableLayout.HeadItem text="Hash" />
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Time" />
											<TableLayout.HeadItem text="Contract" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data?.map((transaction, key) => {
											// TODO: Extract from and to from Ethereum.Executed event
											const call = transaction.call;
											console.log(call);
											// const ethereumExecutedEvent = call.events.find(
											// 	(event) => event.name === "Ethereum.Executed"
											// );
											// const { to, from } = ethereumExecutedEvent.args;
											// console.log(to, from)
											return (
												<tr key={key}>
													<TableLayout.Data dataClassName="!text-indigo-500 font-bold">
														<Link
															href={`/extrinsic/${transaction.call.extrinsic.id}`}
														>
															<span>
																{formatExtrinsicId(
																	transaction.call.extrinsic.id
																)}
															</span>
														</Link>
													</TableLayout.Data>
													<TableLayout.Data>
														<BlockFinalizedIcon
															status={transaction.call.success}
															iconClassName="h-5"
															isExtrinsic={true}
														/>
													</TableLayout.Data>
													<TableLayout.Data>
														{formatAddress(transaction.call.extrinsic.hash, 6)}
													</TableLayout.Data>
													<TableLayout.Data>
														{transaction.call.block.height}
													</TableLayout.Data>
													<TableLayout.Data>
														<TimeAgo date={transaction.call.block.timestamp} />
													</TableLayout.Data>
													<TableLayout.Data>
														{transaction.contract}
													</TableLayout.Data>
												</tr>
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
