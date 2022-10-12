import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Pagination {
	currentPage: number;
	pages?: Array<undefined>;
}

type Table =
	| "accountEvmTransactions"
	| "accountTransfers"
	| "extrinsics"
	| "blocks"
	| "accounts";

type PaginationState = Record<Table, Pagination>;

const pagination = atom<PaginationState>({
	accountEvmTransactions: {
		currentPage: 1,
	},
	accountTransfers: {
		currentPage: 1,
	},
	extrinsics: {
		currentPage: 1,
	},
	blocks: {
		currentPage: 1,
	},
	accounts: {
		currentPage: 1,
	},
});

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

	const resetCurrentPage = (table: Table) => {
		setPagination({
			table,
			key: "currentPage",
			value: 1,
		});
	};

	// Reset currentPage to 1 if user navigates away
	useEffect(() => {
		if (!router?.asPath) return;

		["extrinsics", "blocks", "accounts", "account"].forEach((path: string) => {
			if (!path || router?.asPath.includes(path)) return;

			if (path !== "account") return resetCurrentPage(path as Table);

			resetCurrentPage("accountTransfers");
			resetCurrentPage("accountEvmTransactions");
		});
	}, [router?.asPath]);

	return {
		setPages,
		setCurrentPage,
		pages: pagination[table]?.pages,
		currentPage: pagination[table].currentPage,
	};
};
