import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

import { ROOT_NETWORK } from "@/libs/constants";

export const graphQLClient = new GraphQLClient(ROOT_NETWORK.GraphQlEndpoint);

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});