import { useEffect } from "react";

import { ExtrinsicsList } from "@/components";
import { useGetExtrinsicsByIdsQuery } from "@/libs/api/generated.ts";
import { graphQLClient } from "@/libs/client";
import { usePagination } from "@/libs/stores";

export const getServerSideProps = async (context) => {
	const extrinsicIds = context?.params?.extrinsicIds;

	const returnNotFound = () => ({ notFound: true });

	const returnProp = () => ({
		props: { extrinsicIds },
	});

	return !extrinsicIds.length ? returnNotFound() : returnProp();
};

export default function ExtrinsicIds({ extrinsicIds }) {
	const query = useQuery(20, extrinsicIds);
	const { pages } = usePagination("extrinsics");

	const hashValue = query.isFetching ? "-" : "Not found";

	return (
		<ExtrinsicsList
			title={`Extrinsics from hash: ${!query.hash ? hashValue : query.hash}`}
			query={query}
			pages={pages}
		/>
	);
}

const useQuery = (limit, extrinsicIds) => {
	const { currentPage } = usePagination("extrinsics");

	// just get the data from API once, not using polling method
	const query = useGetExtrinsicsByIdsQuery(graphQLClient, {
		limit,
		offset: (currentPage - 1) * limit,
		idArray: extrinsicIds,
	});
	usePages(query.data, limit);

	return {
		...query,
		data: query?.data?.archive?.extrinsic,
		// since these extrinsics are based on the same hash,
		// we just get the hash of the first item's extrinsic data
		hash: !query?.data?.archive?.extrinsic[0]
			? ""
			: query?.data?.archive?.extrinsic[0].hash,
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
