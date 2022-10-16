import { useEffect } from "react";

import { ExtrinsicsList } from "@/components";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";

export default function Extrinsics() {
	const query = useQuery(20);
	const { pages } = usePagination("extrinsics");

	return <ExtrinsicsList title={`Extrinsics`} query={query} pages={pages} />;
}

const useQuery = (limit) => {
	const { currentPage } = usePagination("extrinsics");

	const query = usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(query.data, limit);

	// Prefetch next page
	usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.archive?.extrinsic,
	};
};

const usePages = (data, limit) => {
	const { setPages } = usePagination("extrinsics");

	useEffect(() => {
		if (!data?.archive?.extrinsic_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.ceil(
						data?.archive?.extrinsic_aggregate?.aggregate?.count / limit
					)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.archive?.extrinsic_aggregate]);
};
