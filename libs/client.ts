import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";
import { GRAPHQL_ENDPOINT, HASURA_SECRET } from "@/libs/constants";

export const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
	headers: {
		"x-hasura-admin-secret": HASURA_SECRET,
	},
});

export const queryClient = new QueryClient();
