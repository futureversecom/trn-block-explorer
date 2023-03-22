import fetch from "node-fetch";

const headers = () => {
	return {
		headers: {
			"Content-Type": "application/json",
		},
	};
};

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

export const getTransactionByHash = async (transactionHash) => {
	return await fetch(
		`/api/evm/getTransactionByHash?transactionHash=${transactionHash}`,
		{
			method: "GET",
			...headers(),
		}
	).then(extractBody);
};

export const getTransactionsForAddress = async (address, page) => {
	return await fetch(
		`/api/evm/getTransactionsForAddress?address=${address}&page=${page}`,
		{
			method: "GET",
			...headers(),
		}
	).then(extractBody);
};

export const getERC721TransferForAddress = async (address, page) => {
	return await fetch(
		`/api/evm/getERC721TransferForAddress?address=${address}&page=${page}`,
		{
			method: "GET",
			...headers(),
		}
	).then(extractBody);
};

export const getERC20TransferForAddress = async (address, page) => {
	return await fetch(
		`/api/evm/getERC20TransferForAddress?address=${address}&page=${page}`,
		{
			method: "GET",
			...headers(),
		}
	).then(extractBody);
};

export const getERC20Balance = async (address) => {
	return await fetch(`/api/evm/getERC20Balance?address=${address}`, {
		method: "GET",
		...headers(),
	}).then(extractBody);
};

export const getERC721Balance = async (address) => {
	return await fetch(`/api/evm/getERC721Balance?address=${address}`, {
		method: "GET",
		...headers(),
	}).then(extractBody);
};

export const isContract = async (address) => {
	return await fetch(`/api/evm/isContract?address=${address}`, {
		method: "GET",
		...headers(),
	}).then(extractBody);
};

export const getEVMTransactions = async (page, limit) => {
	return await fetch(
		`/api/evm/getEVMTransactions?page=${page}&limit=${limit}`,
		{
			method: "GET",
			...headers(),
		}
	).then(extractBody);
};
