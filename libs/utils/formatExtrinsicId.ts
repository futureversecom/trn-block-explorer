const stripLeadingZeros = (str: string) =>
	str.replaceAll(new RegExp("^0+(?!$)", "g"), "");

export const formatExtrinsicId = (extrinsicIdRaw: string) => {
	let [blockNumber, indexInBlock] = extrinsicIdRaw.split("-");

	blockNumber = stripLeadingZeros(blockNumber);
	indexInBlock = stripLeadingZeros(indexInBlock);

	return `${blockNumber}-${indexInBlock}`;
};
