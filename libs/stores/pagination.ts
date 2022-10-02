import { atom, useAtom } from "jotai";

interface Pagination {
	currentPage: number;
	pages?: Array<undefined>;
}

type Table = "accountTransfers" | "extrinsics" | "blocks" | "accounts";

type PaginationState = Record<Table, Pagination>;

const pagination = atom<PaginationState>({
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
	const [pagination, setPagination] = useAtom(paginationAtom);

	const onPageClick = (page: number, ignoreCondition?: boolean) => {
		if (ignoreCondition) return;
		setPagination({ table, key: "currentPage", value: page });
	};

	const setPages = (pages: Array<undefined>) =>
		setPagination({ table, key: "pages", value: pages });

	return {
		setPages,
		onPageClick,
		pages: pagination[table]?.pages,
		currentPage: pagination[table].currentPage,
	};
};
