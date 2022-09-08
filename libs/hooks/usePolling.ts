import { useMemo } from "react";
import { graphQLClient } from "@/libs/client";

export const usePolling = <T>(
	initialData: T,
	queryFunction: Function,
	queryParams?: Record<string, unknown>,
	refetchInterval: number = 5000
) => {
	const { data, isFetching, isLoading, isError, isRefetching } = queryFunction(
		graphQLClient,
		queryParams,
		{
			refetchInterval,
			refetchIntervalInBackground: true,
		}
	);

	return useMemo<any>(
		() => ({
			data: data ? data : initialData,
			isLoading,
			isError,
			isRefetching,
		}),
		[data, initialData, isFetching, isLoading, isError, isRefetching]
	);
};
