import fromExponential from "from-exponential";
import { useMemo } from "react";

import {
	useGetTransfersForAddressAggregateQuery,
	useGetTransfersForAddressQuery,
} from "@/libs/api/generated.ts";
import { usePages, usePolling } from "@/libs/hooks";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";
import { formatBalance, getAssetMetadata } from "@/libs/utils";

import {
	AddressLink,
	InOutLabel,
	LoadingBlock,
	Pagination,
	TableLayout,
	TextLink,
	TimeAgo,
} from "./";

const EntryLimit = 10;
const PaginationTable = "accountTransfers";

export default function TransfersForAddress({ walletAddress }) {
	const { pages } = usePagination(PaginationTable);

	const query = useTransfers(walletAddress, EntryLimit);
	useAccountRefetchStatus(PaginationTable, query.isRefetching);

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
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="Token" />
									<TableLayout.HeadItem text="Amount" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query.data.map((transfer, key) => {
									const asset = getAssetMetadata(transfer.asset_id);

									return (
										<TransfersForAddressRow
											key={key}
											block_number={transfer.block_number}
											from_id={transfer.from_id}
											to_id={transfer.to_id}
											walletAddress={walletAddress}
											timestamp={transfer.timestamp}
											asset={asset}
											asset_id={transfer.asset_id}
											amount={transfer.amount}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No Transfers</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table={PaginationTable} />}
		</div>
	);
}

const TransfersForAddressRow = ({
	block_number,
	from_id,
	to_id,
	walletAddress,
	timestamp,
	asset,
	asset_id,
	amount,
}) => {
	const parsedAmount = useMemo(() => fromExponential(amount), [amount]);

	return (
		<tr>
			<TableLayout.Data>
				<TextLink link={`/block/${block_number}`} text={block_number} />
			</TableLayout.Data>

			<TableLayout.Data>
				{from_id?.toLowerCase() === walletAddress.toLowerCase() ? (
					<InOutLabel type="out" />
				) : (
					<InOutLabel type="in" />
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				<TimeAgo timestamp={timestamp} />
			</TableLayout.Data>

			<TableLayout.Data>{asset?.symbol ?? asset_id}</TableLayout.Data>

			<TableLayout.Data>
				{formatBalance(parsedAmount, asset?.decimals ?? 6)}
			</TableLayout.Data>

			<TableLayout.Data>
				<AddressLink address={from_id} isAccount={from_id === walletAddress} />
			</TableLayout.Data>

			<TableLayout.Data>
				<AddressLink address={to_id} isAccount={to_id === walletAddress} />
			</TableLayout.Data>
		</tr>
	);
};

const useTransfers = (address, limit) => {
	const { currentPage } = usePagination(PaginationTable);

	const query = usePolling(
		{},
		useGetTransfersForAddressQuery,
		{
			address,
			limit,
			offset: (currentPage - 1) * limit,
		},
		12000
	);
	// Prefetch next page
	usePolling({}, useGetTransfersForAddressQuery, {
		limit,
		offset: currentPage * limit,
	});

	const aggregateQuery = usePolling(
		{},
		useGetTransfersForAddressAggregateQuery,
		{ address }
	);
	usePages(
		PaginationTable,
		aggregateQuery?.data?.balances?.transfer_aggregate?.aggregate?.count,
		limit
	);

	return {
		...query,
		data: query?.data?.balances?.transfer,
	};
};
