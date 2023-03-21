export const IS_MAINNET = process.env.NEXT_PUBLIC_IS_MAINNET === "true";

export const ETH_CHAIN_ID = IS_MAINNET ? 1 : 5;

export const ROOT_GAS_TOKEN_PRE_BLOCK = Number(
	process.env.NEXT_PUBLIC_ROOT_GAS_TOKEN_PRE_BLOCK
);

const MONGO_APP_ID = process.env.MONGO_APP_ID ?? "";
export const MONGO_API_KEY = process.env.MONGO_API_KEY ?? "";

const GraphQlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";
const MongoApiEndpoint = `https://ap-southeast-2.aws.data.mongodb-api.com/app/${MONGO_APP_ID}/endpoint/data/v1`;

export const ROOT_NETWORK = {
	porcini: {
		ChainName: "Porcini",
		ApiUrl: {
			InWebSocket: "wss://porcini.au.rootnet.app/ws",
		},
		GraphQlEndpoint,
		MongoApiEndpoint,
		MongoDatabase: "porcini-ingestor",
	},
	mainnet: {
		ChainName: "ROOT",
		ApiUrl: {
			InWebSocket: "wss://root.au.rootnet.live/ws",
		},
		GraphQlEndpoint,
		MongoApiEndpoint,
		MongoDatabase: "mainnet-ingestor",
	},
}[IS_MAINNET ? "mainnet" : "porcini"];

export const BURN_ADDRESSES = [
	"0x0000000000000000000000000000000000000000",
	"0x000000000000000000000000000000000000dead",
	"0xdead000000000000000042069420694206942069",
];
