import { useQuery } from "@tanstack/react-query";

import { LoadingBlock, Pagination } from "@/components";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { usePages } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";

const PaginationTable = "accountEvmTransactions";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination(PaginationTable);

	const query = useQuery(
		["evm_transactions", walletAddress, currentPage],
		() => {
			return getTransactionsForAddress(walletAddress, currentPage, {
				invalidateCache: true,
			});
		},
		{
			refetchInterval: 15_000,
		}
	);
	usePages(PaginationTable, query?.data?.totalPages);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Evm Transactions" height="h-20" />
			) : (
				<EVMTransactionsTable query={query} walletAddress={walletAddress} />
			)}

			{pages?.length > 1 && <Pagination table={PaginationTable} />}
		</div>
	);
}
