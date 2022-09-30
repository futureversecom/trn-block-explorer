import { utils as ethers } from "ethers";

export const formatBalance = (balance: number = 0, decimals: number) => {
	return ethers.formatUnits(String(balance), decimals);
};
