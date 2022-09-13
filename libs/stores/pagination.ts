import { atom, useAtom } from "jotai";

interface Pagination {
	currentPage: number;
	pages?: Array<undefined>;
}

type Table = "ercTransfers" | "evmTransactions";

type PaginationState = Record<Table, Pagination>;

const pagination = atom<PaginationState>({
	ercTransfers: {
		currentPage: 1,
	},
	evmTransactions: {
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

export const usePagination = (table: PaginationUpdate["table"]) => {
	const [pagination, setPagination] = useAtom(paginationAtom);

	const onPageClick = (page: number) =>
		setPagination({ table, key: "currentPage", value: page });

	const setPages = (pages: Array<undefined>) =>
		setPagination({ table, key: "pages", value: pages });

	return {
		setPages,
		onPageClick,
		pages: pagination[table]?.pages,
		currentPage: pagination[table].currentPage,
	};
};
