import EthereumTokens from "@/libs/artifacts/EthereumTokens.json";
import { ETH_CHAIN_ID } from "@/libs/constants";

interface EthereumToken {
	symbol: string;
	address: string;
	decimals: number;
	chainId: number;
	assetId: number;
}

export const getAssetMetadata = (assetId: string): EthereumToken | string => {
	try {
		const assetNumber = parseInt(assetId);
		const asset = EthereumTokens.tokens.find(
			(token) => token.assetId === assetNumber && token.chainId === ETH_CHAIN_ID
		);

		if (!asset) return assetId;

		return asset;
	} catch (_) {
		return assetId;
	}
};
