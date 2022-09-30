export const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";

export const IS_MAINNET =
	process.env.NEXT_PUBLIC_IS_MAINNET === "true" ? true : false;

export const ETH_CHAIN_ID = IS_MAINNET ? 1 : 5;

export const NATIVE_TOKEN = process.env.NEXT_PUBLIC_NATIVE_TOKEN ?? "ROOT";
