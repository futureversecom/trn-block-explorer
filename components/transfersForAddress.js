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
import {
	formatBalance,
	formatExtrinsicId,
	getAssetMetadata,
} from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountTransfers");

	const query = useTransfers(walletAddress);

	const pageSlice = useMemo(() => (currentPage - 1) * 10, [currentPage]);

	useAccountRefetchStatus("accountTransfers", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Transfers" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Extrinsic" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="Token" />
									<TableLayout.HeadItem text="Amount" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query.data
									.slice(pageSlice, pageSlice + 10)
									.map((transfer, key) => {
										const asset = getAssetMetadata(transfer.asset_id);

										return (
											<tr key={key}>
												<TableLayout.Data>
													<Link href={`/block/${transfer.block_number}`}>
														<span className="cursor-pointer text-indigo-500 hover:text-white">
															{transfer.block_number}
														</span>
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>
													<Link href={`/extrinsic/${transfer.id}`}>
														<span className="cursor-pointer text-indigo-500 hover:text-white">
															{formatExtrinsicId(transfer.id)}
														</span>
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>
													{transfer.from_id?.toLowerCase() ===
													walletAddress.toLowerCase() ? (
														<InOutLabel type="out" />
													) : (
														<InOutLabel type="in" />
													)}
												</TableLayout.Data>

												<TableLayout.Data>
													<TimeAgo date={transfer.timestamp} />
												</TableLayout.Data>

												<TableLayout.Data>
													{asset?.symbol ?? transfer.asset_id}
												</TableLayout.Data>

												<TableLayout.Data>
													{formatBalance(transfer.amount, asset?.decimals ?? 6)}
												</TableLayout.Data>

												<TableLayout.Data>
													<AddressLink
														address={transfer.from_id}
														isAccount={transfer.from_id === walletAddress}
													/>
												</TableLayout.Data>

												<TableLayout.Data>
													<AddressLink
														address={transfer.to_id}
														isAccount={transfer.to_id === walletAddress}
													/>
												</TableLayout.Data>
											</tr>
										);
									})}
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

const useTransfers = (address) => {
	const toQuery = usePolling(
		{},
		useGetTransfersToAddressQuery,
		{
			address,
		},
		12000
	);

	const fromQuery = usePolling(
		{},
		useGetTransfersFromAddressQuery,
		{
			address,
		},
		12000
	);

	const data = useMemo(
		() =>
			[
				...(toQuery?.data?.balances?.transfer ?? []),
				...(fromQuery?.data?.balances?.transfer ?? []),
			]
				.filter((transfer) => transfer?.from_id && transfer?.to_id)
				.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)),
		[toQuery?.data, fromQuery?.data]
	);

	usePages(data?.length);

	return {
		data,
		isLoading: toQuery?.isLoading || fromQuery?.isLoading,
		isRefetching: toQuery?.isRefetching || fromQuery?.isRefetching,
	};
};

const usePages = (transferCount) => {
	const { setPages } = usePagination("accountTransfers");

	useEffect(() => {
		if (!transferCount) return;

		setPages(Array.from(Array(Math.ceil(transferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transferCount]);
};
