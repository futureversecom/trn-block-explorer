import BigNumber from "bignumber.js";

export * from "./formatExtrinsicId";
export * from "./getAssetMetadata";
export * from "./formatBalance";
export * from "./formatTimeAgo";
export * from "./fetchMongoData";
export * from "./formatMongoData";

export const formatUSD = (amount) => {
	return new Intl.NumberFormat("en-EN", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const formatUnits = (value, decimals) => {
	const a = new BigNumber(value.toString()).dividedBy(
		new BigNumber(10).pow(decimals)
	);
	return a.toString();
};

export const sleep = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 400);
	});
};

export const formatAddress = (address, len = 6) => {
	if (!address) return null;
	return (
		address.substring(0, len) +
		" ... " +
		address.substring(address.length - len, address.length)
	);
};

export const numberWithCommas = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
