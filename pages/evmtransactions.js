import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
} from "@/components";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getEVMTransactions } from "@/libs/evm-api";
import { usePages } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";

const PaginationTable = "evmtransactions";

export default function EVMTransactions() {
	const limit = 25;
	const { pages, currentPage } = usePagination(PaginationTable);

	const query = useQuery(
		["evm_transactions_overview", limit, currentPage],
		() => {
			return getEVMTransactions(currentPage, limit, { invalidateCache: true });
		},
		{
			refetchInterval: 15_000,
		}
	);
	usePages(PaginationTable, query?.data?.totalPages);

	return (
		<ContainerLayout>
			<PageHeader
				title={`EVM Transactions`}
				icon={<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			<div>
				{query.isLoading ? (
					<LoadingBlock title="Evm Transactions" height="h-20" />
				) : (
					<EVMTransactionsTable query={query} />
				)}

				{pages?.length > 1 && <Pagination table={PaginationTable} />}
			</div>
		</ContainerLayout>
	);
}
