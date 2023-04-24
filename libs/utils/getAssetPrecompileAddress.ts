import { utils as ethers } from "ethers";

export const getAssetPrecompileAddress = (assetId: number) => {
	const assetIdHex = assetId.toString(16).padStart(8, "0").toUpperCase();
	return ethers.getAddress(`0xCCCCCCCC${assetIdHex}000000000000000000000000`);
};
