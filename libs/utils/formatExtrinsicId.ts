const stripLeadingZeros = (str: string) =>
	str.replaceAll(new RegExp("^0+(?!$)", "g"), "");

export const formatExtrinsicId = (extrinsicIdRaw: string) => {
	let [blockNumber, indexInBlock] = (extrinsicIdRaw ?? "0-0").split("-");

	blockNumber = stripLeadingZeros(blockNumber);
	indexInBlock = stripLeadingZeros(indexInBlock);

	return `${blockNumber}-${indexInBlock}`;
};
