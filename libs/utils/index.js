export * from "./formatExtrinsicId";
export * from "./getAssetMetadata";

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
