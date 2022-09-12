import clsx from "clsx";
import Link from "next/link";
import TimeAgo from "react-timeago";
import { usePolling } from "@/libs/hooks";
import { formatAddress } from "@/libs/utils";
import { useAccountRefetchStatus } from "@/libs/stores";
import { LoadingBlock, TableLayout, AddressLink } from "@/components";
import { useGetEvmTransactionsForAddressQuery } from "@/libs/api/generated.ts";

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
	useAccountRefetchStatus("evmTransactions", query.isRefetching);

	return (
		<div>
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
										<TableLayout.Data>
											{block?.txHash ? formatAddress(block.txHash, 12) : "?"}
										</TableLayout.Data>

										<TableLayout.Data dataClassName="!text-indigo-500">
											<Link href={`/block/${block.block}`}>{block?.block}</Link>
										</TableLayout.Data>

										<TableLayout.Data>
											{block?.from.toLowerCase() == walletAddress.toLowerCase()
												? "Out"
												: "In"}
										</TableLayout.Data>

										<TableLayout.Data>
											<TimeAgo date={block.timestamp} />
										</TableLayout.Data>

										<TableLayout.Data dataClassName="!px-3">
											<span className="rounded-md bg-slate-700 p-2 text-gray-50">
												{block?.input?.method || "?"}
											</span>
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												block.from !== walletAddress && "!text-indigo-500"
											)}
										>
											<AddressLink
												address={block.from}
												isAccount={block.from === walletAddress}
											/>
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												block.to !== walletAddress && "!text-indigo-500"
											)}
										>
											<AddressLink
												address={block.to}
												isAccount={block.to === walletAddress}
											/>
										</TableLayout.Data>
									</tr>
								))}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">
							😥 No EVM Transactions
						</div>
					)}
				</div>
			)}
		</div>
	);
}
