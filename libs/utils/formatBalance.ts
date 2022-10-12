import { utils as ethers } from "ethers";

export const formatBalance = (balance: number = 0, decimals: number) => {
	const [beforeDec, afterDec] = ethers
		.formatUnits(String(balance), decimals)
		.split(".");

	if (afterDec != "0") {
		return `${beforeDec}.${afterDec}`;
	} else {
		return beforeDec;
	}
};
