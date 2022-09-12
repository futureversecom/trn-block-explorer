import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "@/libs/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { useGetEvmTransactionsForAddressQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import {
	LoadingBlock,
	RefetchIndicator,
	TableLayout,
	AddressLink,
} from "@/components";
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
						<div className="space-x-3 text-center">😥 No EVM Transactions</div>
					)}
				</div>
			)}
		</div>
	);
}
