import { useQuery } from "@tanstack/react-query";

import { LoadingBlock, Pagination } from "@/components";
import EVMTransactionsTable from "@/components/evm/evmTransactionsTable";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { usePages } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";

import { getContractDataForAddress } from "../libs/evm-api";

const PaginationTable = "accountEvmTransactions";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination(PaginationTable);

	const queryTxs = useQuery(
		["evm_transactions", walletAddress, currentPage],
		() => {
			return getTransactionsForAddress(walletAddress, currentPage);
		},
		{
			refetchInterval: 15_000,
		}
	);
	const queryContractDetails = useQuery(
		["evm_transactions_contract_data", walletAddress],
		() => {
			return getContractDataForAddress(walletAddress);
		},
		{
			refetchInterval: 85_000,
		}
	);
	const contractData = queryContractDetails?.data?.contractData;
	const queryTxsData = queryTxs?.data?.docs;
	const dataDocs = queryTxsData
		? queryTxsData.map((tx) => {
				const fromContract = contractData?.find(
					(data) => data.address === tx.from
				);
				const toContract = contractData?.find((data) => data.address === tx.to);
				if (fromContract) {
					return { ...tx, fromContract: [fromContract] };
				} else if (toContract) {
					return { ...tx, toContract: [toContract] };
				}
				return tx;
		  })
		: null;
	const query = dataDocs
		? {
				...queryTxs,
				data: { docs: dataDocs, totalPages: queryTxs.data.totalPages },
		  }
		: queryTxs;
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
