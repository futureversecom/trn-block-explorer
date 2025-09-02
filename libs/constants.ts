export const IS_MAINNET = process.env.NEXT_PUBLIC_IS_MAINNET === "true";

export const ETH_CHAIN_ID = IS_MAINNET ? 1 : 5;

export const ROOT_GAS_TOKEN_PRE_BLOCK = Number(
	process.env.NEXT_PUBLIC_ROOT_GAS_TOKEN_PRE_BLOCK
);

const GraphQlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";
export const ROOT_NETWORK = {
	porcini: {
		ChainName: "Porcini",
		ChainId: 7672,
		ApiUrl: {
			InWebSocket: "wss://porcini.au.rootnet.app/ws",
		},
		GraphQlEndpoint,
		MongoApiEndpoint: "https://mongo-rest-api.au.dev.rootnet.app/",
		MongoDatabase: "porcini-ingestor",
	},
	mainnet: {
		ChainName: "ROOT",
		ChainId: 7668,
		ApiUrl: {
			InWebSocket: "wss://root.au.rootnet.live/ws",
		},
		GraphQlEndpoint,
		MongoApiEndpoint: `https://mongo-rest-api.au.prod.rootnet.app/`,
		MongoDatabase: "mainnet-ingestor",
	},
}[IS_MAINNET ? "mainnet" : "porcini"];

export const BURN_ADDRESSES = [
	"0x0000000000000000000000000000000000000000",
	"0x000000000000000000000000000000000000dead",
	"0xdead000000000000000042069420694206942069",
];

export const SHOW_CONTRACT_SOURCE =
	process.env.NEXT_PUBLIC_SHOW_CONTRACT_SOURCE === "true";
