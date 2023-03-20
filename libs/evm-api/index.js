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

export const getTransactionByHash = async (txHash) => {
	return await fetch("/api/evm/getTransactionByHash", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ txHash }),
	}).then(extractBody);
};

export const getTransactionsForAddress = async (address, page) => {
	return await fetch("/api/evm/getTransactionsForAddress", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC721TransferForAddress = async (address, page) => {
	return await fetch("/api/evm/getERC721TransferForAddress", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC20TransferForAddress = async (address, page) => {
	return await fetch("/api/evm/getERC20TransferForAddress", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC20Balance = async (address) => {
	return await fetch("/api/evm/getERC20Balance", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const getERC721Balance = async (address) => {
	return await fetch("/api/evm/getERC721Balance", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const isContract = async (address) => {
	return await fetch("/api/evm/isContract", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const getEVMTransactions = async (page, limit) => {
	return await fetch("/api/evm/getEVMTransactions", {
		method: "POST",
		...headers(),
		body: JSON.stringify({ page, limit }),
	}).then(extractBody);
};
