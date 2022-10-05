import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { createContext } from "react";

import { GRAPHQL_ENDPOINT } from "@/libs/constants";

export const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT);

export const queryClient = new QueryClient();

// TODO: perhaps put this in a separate file related to contexts
export const PolkadotContext = createContext(null);
