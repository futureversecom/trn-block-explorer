import { useMemo } from "react";
import { graphQLClient } from "@/libs/client";
import { formatExtrinsicId } from "@/libs/utils";
import { useGetExtrinsicIdFromHashQuery } from "@/libs/api/generated";

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
