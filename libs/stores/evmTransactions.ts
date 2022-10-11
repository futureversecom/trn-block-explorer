import { atom, useAtom } from "jotai";
import { useEffect, useMemo } from "react";

import { useGetEvmTransactionsQuery } from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";
import { EvmTransactions } from "@/libs/types";

const evmTransactionsStore = atom<EvmTransactions>([]);

export const evmTransactionsAtom = atom(
	(get) => get(evmTransactionsStore),
	(_, set, update: EvmTransactions) => {
		set(evmTransactionsStore, update);
	}
);

export const useEvmTransactions = (address?: string) => {
	const [evmTransactions, setEvmTransactions] = useAtom(evmTransactionsAtom);

	const query = usePolling(undefined, useGetEvmTransactionsQuery);

	useEffect(() => {
		if (!query?.data) return;

		setEvmTransactions(query.data.archive?.frontier_ethereum_transaction);
	}, [query?.data]);

	const evmTransactionsForAddress = useMemo(() => {
		if (!address || !evmTransactions?.length) return [];

		address = address.toLowerCase();

		return evmTransactions.reduce((acc, curr) => {
			let transactions = [];
			for (const event of curr.call?.events) {
				if (!event.args?.from && !event.args?.to) continue;
				if (event.args.from !== address && event.args.to !== address) continue;

				transactions.push(curr);
			}

			return acc.concat(...transactions);
		}, [] as EvmTransactions);
	}, [address, query?.data, evmTransactions]);

	return {
		evmTransactions,
		evmTransactionsForAddress,
		isLoading: query?.isLoading,
	};
};
