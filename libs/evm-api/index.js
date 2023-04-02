import fetch from "node-fetch";

const extractBody = (res) => {
	if (res.ok) {
		return res.json();
	} else {
		return res.text().then((text) => {
			console.log("Error: ", text);
			let errMessage;
			try {
				let err = text;
				if (typeof text === "object") {
					err = JSON.parse(text);
				}
				errMessage = err.message;
			} catch (error) {
				throw new Error(error);
			}
			throw new Error(errMessage || text);
		});
	}
};

const fetchEvmData = async (slug, variables, options) => {
	let params = new URLSearchParams(variables);
	if (options?.invalidateCache) params.append("_vercel_no_cache", "1");

	return await fetch(`/api/evm/${slug}/?${params.toString()}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(extractBody);
};

export const getTransactionByHash = async (transactionHash, options) => {
	return await fetchEvmData(
		"getTransactionByHash",
		{ transactionHash },
		options
	);
};

export const getTransactionsForAddress = async (address, page, options) => {
	return await fetchEvmData(
		"getTransactionsForAddress",
		{ address, page },
		options
	);
};

export const getERC721TransferForAddress = async (address, page, options) => {
	return await fetchEvmData(
		"getERC721TransferForAddress",
		{ address, page },
		options
	);
};

export const getERC20TransferForAddress = async (address, page, options) => {
	return await fetchEvmData(
		"getERC20TransferForAddress",
		{ address, page },
		options
	);
};

export const getERC20Balance = async (address, options) => {
	return await fetchEvmData("getERC20Balance", { address }, options);
};

export const getERC721Balance = async (address, options) => {
	return await fetchEvmData("getERC721Balance", { address }, options);
};

export const isContract = async (address, options) => {
	return await fetchEvmData("isContract", { address }, options);
};

export const getEVMTransactions = async (page, limit, options) => {
	return await fetchEvmData("getEVMTransactions", { page, limit }, options);
};
