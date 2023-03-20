import { useQuery } from "@tanstack/react-query";

import { executeGraphQuery } from "@/libs/utils";

import { useRealmApp } from "./";

interface UseEvmQueryParams {
	query: string;
	queryKey?: string;
	refetchInterval?: number;
	variables?: Record<string, unknown>;
}

export const useEvmQuery = ({
	query,
	queryKey,
	variables,
	refetchInterval,
}: UseEvmQueryParams) => {
	const getAccessToken = useRealmApp();

	return useQuery(
		[queryKey],
		async () => {
			const accessToken = await getAccessToken();
			if (!accessToken) return null;

			return await executeGraphQuery(query, variables ?? {}, accessToken);
		},
		{
			...(refetchInterval && {
				refetchInterval,
				refetchIntervalInBackground: true,
			}),
		}
	);
};
