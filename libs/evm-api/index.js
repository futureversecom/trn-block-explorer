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

const fetchEvmData = async (slug, variables) => {
	let params = new URLSearchParams(variables);

	return await fetch(`/api/evm/${slug}/?${params.toString()}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then(extractBody);
};

export const getTransactionByHash = async (transactionHash) => {
	return await fetchEvmData("getTransactionByHash", { transactionHash });
};

export const getTransactionsForAddress = async (address, page) => {
	return await fetchEvmData("getTransactionsForAddress", { address, page });
};

export const getERC721TransferForAddress = async (address, page) => {
	return await fetchEvmData("getERC721TransferForAddress", { address, page });
};

export const getERC20TransferForAddress = async (address, page) => {
	return await fetchEvmData("getERC20TransferForAddress", { address, page });
};

export const getERC20Balance = async (address) => {
	return await fetchEvmData("getERC20Balance", { address });
};

export const getERC721Balance = async (address) => {
	return await fetchEvmData("getERC721Balance", { address });
};

export const getContractData = async (address) => {
	return await fetchEvmData("getContractData", { address });
};

export const getEVMTransactions = async (page, limit) => {
	return await fetchEvmData("getEVMTransactions", { page, limit });
};
