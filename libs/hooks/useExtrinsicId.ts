import { useMemo } from "react";

import { useGetExtrinsicIdFromHashQuery } from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";
import { formatExtrinsicId } from "@/libs/utils";

export const useExtrinsicId = (extrinsicHash: string) => {
	const { data } = useGetExtrinsicIdFromHashQuery(graphQLClient, {
		extrinsicHash,
	});

	return useMemo(() => {
		if (!data) return;

		const raw = data?.archive?.extrinsic[0]?.id;

		return {
			raw,
			formatted: formatExtrinsicId(raw),
		};
	}, [data]);
};
