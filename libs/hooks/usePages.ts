import { useEffect } from "react";

import { type Table, usePagination } from "@/libs/stores";

export const usePages = (
	table: Table,
	pagesOrCount?: number,
	limit?: number
) => {
	const { setPages } = usePagination(table);

	useEffect(() => {
		if (!pagesOrCount) return;

		setPages(
			Array.from(Array(Math.ceil(limit ? pagesOrCount / limit : pagesOrCount)))
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pagesOrCount, limit]);
};
