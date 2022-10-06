export const IS_MAINNET =
	process.env.NEXT_PUBLIC_IS_MAINNET === "true" ? true : false;

export const ETH_CHAIN_ID = IS_MAINNET ? 1 : 5;

export const NATIVE_TOKEN = process.env.NEXT_PUBLIC_NATIVE_TOKEN ?? "ROOT";

export const ROOT_GAS_TOKEN_PRE_BLOCK = Number(
	process.env.NEXT_PUBLIC_ROOT_GAS_TOKEN_PRE_BLOCK
);

export const ROOT_NETWORK = {
	porcini: {
		ChainName: "Porcini",
		ApiUrl: {
			InWebSocket: "wss://porcini.au.rootnet.app/ws",
		},
		GraphQlEndpoint: process.env.NEXT_PUBLIC_PORCINI_GRAPHQL_ENDPOINT ?? "",
	},
	mainnet: {
		ChainName: "ROOT",
		ApiUrl: {
			InWebSocket: "wss://root.au.rootnet.live/ws",
		},
		GraphQlEndpoint: process.env.NEXT_PUBLIC_ROOT_GRAPHQL_ENDPOINT ?? "",
	}
}[IS_MAINNET ? "mainnet" : "porcini"];
