import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
} from "@/components";
import EVMPagination from "@/components/evm/evmpagination";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { useQuery } from '@tanstack/react-query'
export default function EVMTransactions() {
	const [page, setPage] = useState(1);

	const query = useQuery(
		["evm_transactions_overview", page],
		() => {
			return getTransactionsForAddress("", page);
		},
		{
			refetchInterval: 15_000,
		}
	);
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

				<EVMPagination data={query?.data} onPageChange={(p) => setPage(p)} />
			</div>
		</ContainerLayout>
	);
}
