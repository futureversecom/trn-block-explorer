import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { LoadingBlock, Pagination } from "@/components";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { usePagination } from "@/libs/stores";

const PaginationTable = "accountEvmTransactions";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination(PaginationTable);

	const query = useQuery(
		["evm_transactions", walletAddress, currentPage],
		() => {
			return getTransactionsForAddress(walletAddress, currentPage);
		},
		{
			refetchInterval: 15_000,
		}
	);
	usePages(query?.data);

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

const usePages = (data) => {
	const { setPages } = usePagination(PaginationTable);

	useEffect(() => {
		if (!data?.totalPages) return;

		setPages(Array.from(Array(data.totalPages)));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.totalPages]);
};
