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
import {
	useGetTransfersFromAddressQuery,
	useGetTransfersToAddressQuery,
} from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";

export default function TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountTransfers");

	const query = useTransfers(walletAddress, (currentPage - 1) * 5);

	useAccountRefetchStatus("accountTransfers", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Transfers" height="h-20" />
			) : (
				<div className="divide-y border border-gray-400 text-white">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="Token" />
									<TableLayout.HeadItem text="Amount" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query.data.map((transfer, key) => (
									<tr key={key}>
										<TableLayout.Data dataClassName="!text-indigo-500">
											<Link href={`/block/${transfer.block_number}`}>
												{transfer.block_number}
											</Link>
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.from_id?.toLowerCase() ===
											walletAddress.toLowerCase()
												? "Out"
												: "In"}
										</TableLayout.Data>

										<TableLayout.Data>
											<TimeAgo date={transfer.timestamp} />
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.asset_id || "?"}
										</TableLayout.Data>

										<TableLayout.Data>{transfer.amount}</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												transfer.from_id !== walletAddress &&
													transfer.status !== "ISSUED" &&
													"!text-indigo-500"
											)}
										>
											{transfer.status !== "ISSUED" ? (
												<AddressLink
													address={transfer.from_id}
													isAccount={transfer.from_id === walletAddress}
												/>
											) : (
												<span>{transfer.status}</span>
											)}
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												transfer.to_id !== walletAddress &&
													transfer.status !== "BURNED" &&
													"!text-indigo-500"
											)}
										>
											{transfer.status !== "BURNED" ? (
												<AddressLink
													address={transfer.to_id}
													isAccount={transfer.to_id === walletAddress}
												/>
											) : (
												<span>{transfer.status}</span>
											)}
										</TableLayout.Data>
									</tr>
								))}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No Transfers</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table="accountTransfers" />}
		</div>
	);
}

const useTransfers = (address, offset) => {
	const toQuery = usePolling(
		{},
		useGetTransfersToAddressQuery,
		{
			address,
			offset,
		},
		12000
	);

	const fromQuery = usePolling(
		{},
		useGetTransfersFromAddressQuery,
		{
			address,
			offset,
		},
		12000
	);

	usePages(toQuery.data, fromQuery.data);

	return {
		data: [
			...(toQuery?.data?.balances?.transfer ?? []),
			...(fromQuery?.data?.balances?.transfer ?? []),
		].sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)),
		isLoading: toQuery?.isLoading || fromQuery?.isLoading,
	};
};

const usePages = (toData, fromData) => {
	const { setPages } = usePagination("accountTransfers");

	const transferCount = useMemo(() => {
		if (!toData && !fromData) return;

		return (
			toData?.balances?.transfer_aggregate?.aggregate?.count +
			fromData?.balances?.transfer_aggregate?.aggregate?.count
		);
	}, [toData, fromData]);

	useEffect(() => {
		if (!transferCount) return;

		setPages(Array.from(Array(Math.floor(transferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transferCount]);
};
