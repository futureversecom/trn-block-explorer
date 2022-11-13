import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LoadingBlock } from "@/components";
import EVMPagination from "@/components/evm/evmpagination";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getTransactionsForAddress } from "@/libs/evm-api";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const [page, setPage] = useState(1);

	const query = useQuery(
		["evm_transactions", walletAddress, page],
		() => {
			return getTransactionsForAddress(walletAddress, page);
		},
		{
			refetchInterval: 15_000,
		}
	);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Evm Transactions" height="h-20" />
			) : (
				<EVMTransactionsTable query={query} walletAddress={walletAddress} />
			)}

			<EVMPagination data={query?.data} onPageChange={(p) => setPage(p)} />
		</div>
	);
}
