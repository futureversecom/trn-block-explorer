import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const Tables = [
	"blocks",
	"accounts",
	"extrinsics",
	"evmtransactions",
	"accountTransfers",
	"accountErc20Transfers",
	"accountErc721Transfers",
	"accountEvmTransactions",
] as const;

type Table = (typeof Tables)[number];

interface Pagination {
	currentPage: number;
	pages?: Array<undefined>;
}

type PaginationState = Record<Table, Pagination>;

const pagination = atom<PaginationState>(
	Tables.reduce(
		(prev, table) => ({
			...prev,
			[table]: {
				currentPage: 1,
			},
		}),
		{}
	) as PaginationState
);

interface PaginationUpdate {
	key: "pages" | "currentPage";
	value: Pagination["currentPage"] | Pagination["pages"];
	table: Table;
}

const paginationAtom = atom(
	(get) => get(pagination),
	(get, set, { key, value, table }: PaginationUpdate) => {
		const prevPagination = get(pagination);

		set(pagination, {
			...prevPagination,
			[table]: {
				...prevPagination[table],
				[key]: value,
			},
		});
	}
);

export const usePagination = (table: Table) => {
	const router = useRouter();
	const [pagination, setPagination] = useAtom(paginationAtom);

	const setCurrentPage = (page: number) =>
		setPagination({ table, key: "currentPage", value: page });

	const setPages = (pages: Array<undefined>) =>
		setPagination({ table, key: "pages", value: pages });

	const resetCurrentPage = useCallback(
		(table: Table) => {
			setPagination({
				table,
				key: "currentPage",
				value: 1,
			});
		},
		[setPagination]
	);

	// Reset currentPage to 1 if user navigates away
	useEffect(() => {
		if (!router?.asPath) return;

		["extrinsics", "blocks", "accounts", "account", "evmtransactions"].forEach(
			(path: string) => {
				if (!path || router?.asPath.includes(path)) return;

				if (path !== "account") return resetCurrentPage(path as Table);

				resetCurrentPage("accountTransfers");
				resetCurrentPage("accountEvmTransactions");
			}
		);
	}, [router?.asPath, resetCurrentPage]);

	return {
		setPages,
		setCurrentPage,
		pages: pagination[table]?.pages,
		currentPage: pagination[table]?.currentPage,
	};
};
