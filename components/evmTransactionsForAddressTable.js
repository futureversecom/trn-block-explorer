import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "@/libs/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { useGetEvmTransactionsForAddressQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";
import { LoadingBlock, RefetchIndicator, TableLayout } from "@/components";
import clsx from "clsx";

export default function EVMTransactionsForAddress({ walletAddress }) {
	const query = usePolling(
		{},
		useGetEvmTransactionsForAddressQuery,
		{
			address: walletAddress,
		},
		12000
	);

	query.data = query?.data?.evm?.transactions;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
					<h3 className="text-md font-medium leading-6 text-gray-900">
						EVM Transactions
					</h3>
				</div>
				<div>{query.isRefetching && <RefetchIndicator />}</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="EVM Transactions" height="h-20" />
			) : (
				<div className="divide-y rounded-md border border-gray-100 bg-white shadow-md">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-gray-50">
								<tr>
									<TableLayout.HeadItem text="Hash" />
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="Method" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{query.data.map((block, key) => (
									<tr key={key}>
										<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
											<Link href={`/block/${block.height}`}>
												{block?.txHash ? formatAddress(block.txHash, 12) : "?"}
											</Link>
										</TableLayout.Data>

										<TableLayout.Data>{block?.block}</TableLayout.Data>

										<TableLayout.Data>
											<span
												className={clsx(
													"rounded-md p-2 text-gray-50",
													block?.from.toLowerCase() ===
														walletAddress.toLowerCase()
														? "bg-green-800"
														: "bg-red-600"
												)}
											>
												{block?.from.toLowerCase() ==
												walletAddress.toLowerCase()
													? "Out"
													: "In"}
											</span>
										</TableLayout.Data>

										<TableLayout.Data>
											<TimeAgo date={block.timestamp} />
										</TableLayout.Data>

										<TableLayout.Data dataClassName="!px-3">
											<span className="rounded-md bg-slate-700 p-2 text-gray-50">
												{block?.input?.method || "?"}
											</span>
										</TableLayout.Data>

										<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
											<Link href={`/account/${block.from}`}>
												{block?.from ? formatAddress(block.from) : "? "}
											</Link>
										</TableLayout.Data>

										<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
											<Link href={`/account/${block.to}`}>
												{block?.to ? formatAddress(block.to) : "? "}
											</Link>
										</TableLayout.Data>
									</tr>
								))}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="space-x-3 text-center">😥 No EVM Transactions</div>
					)}
				</div>
			)}
		</div>
	);
}
