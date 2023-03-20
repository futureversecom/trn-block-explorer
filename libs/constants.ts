export const IS_MAINNET = process.env.NEXT_PUBLIC_IS_MAINNET === "true";

export const ETH_CHAIN_ID = IS_MAINNET ? 1 : 5;

export const ROOT_GAS_TOKEN_PRE_BLOCK = Number(
	process.env.NEXT_PUBLIC_ROOT_GAS_TOKEN_PRE_BLOCK
);

export const EVM_API_URL =
	process.env.NEXT_PUBLIC_EVM_API_URL ?? "http://localhost:3001";

export const ROOT_NETWORK = {
	porcini: {
		ChainName: "Porcini",
		ApiUrl: {
			InWebSocket: "wss://porcini.au.rootnet.app/ws",
		},
		GraphQlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
	},
	mainnet: {
		ChainName: "ROOT",
		ApiUrl: {
			InWebSocket: "wss://root.au.rootnet.live/ws",
		},
		GraphQlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "",
	},
}[IS_MAINNET ? "mainnet" : "porcini"];

export const BURN_ADDRESSES = [
	"0x0000000000000000000000000000000000000000",
	"0x000000000000000000000000000000000000dead",
	"0xdead000000000000000042069420694206942069",
];
