const stripLeadingZeros = (str: string) =>
	str.replaceAll(new RegExp("^0+(?!$)", "g"), "");

export const formatExtrinsicId = (extrinsicId: string) => {
	if (!extrinsicId) return;

	let [blockNumber, indexInBlock] = extrinsicId.split("-");

	blockNumber = stripLeadingZeros(blockNumber);
	indexInBlock = stripLeadingZeros(indexInBlock);

	return `${blockNumber}-${indexInBlock}`;
};
