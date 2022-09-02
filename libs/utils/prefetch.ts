import { fetcher } from "../api/generated";
import { graphQLClient, queryClient } from "../client";

export const prefetch = async (queryKey: string, query: string) =>
	await queryClient.prefetchQuery([queryKey], fetcher(graphQLClient, query));

export const fetchData = async (
	query: string,
	variables?: Record<string, unknown>
) => {
	const fetchData = fetcher(graphQLClient, query, variables);
	return await fetchData();
};