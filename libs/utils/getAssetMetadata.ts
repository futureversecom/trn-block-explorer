import Assets from "@/libs/artifacts/Assets.json";
import { IS_MAINNET } from "@/libs/constants";

interface EthereumToken {
	symbol: string;
	address?: string;
	decimals: number;
	assetId: number;
}

export const getAssetMetadata = (assetId: string): EthereumToken | string => {
	try {
		const assetNumber = parseInt(assetId);
		const asset = Assets.tokens.find(
			(token) => token.assetId === assetNumber && token.mainnet === IS_MAINNET
		);

		if (!asset) return assetId;

		return asset;
	} catch (_) {
		return assetId;
	}
};
