import fetch from "node-fetch";

import { EVM_API_URL } from "@/libs/constants";

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
	return await fetch(`${EVM_API_URL}/api/getTransactionByHash`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ transactionHash }),
	}).then(extractBody);
};

export const getTransactionsForAddress = async (address, page) => {
	return await fetch(`${EVM_API_URL}/api/getTransactionsForAddress`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC721TransferForAddress = async (address, page) => {
	return await fetch(`${EVM_API_URL}/api/getERC721TransferForAddress`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC20TransferForAddress = async (address, page) => {
	return await fetch(`${EVM_API_URL}/api/getERC20TransferForAddress`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then(extractBody);
};

export const getERC20Balance = async (address) => {
	return await fetch(`${EVM_API_URL}/api/getERC20Balance`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const getERC721Balance = async (address) => {
	return await fetch(`${EVM_API_URL}/api/getERC721Balance`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const isContract = async (address) => {
	return await fetch(`${EVM_API_URL}/api/isContract`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address }),
	}).then(extractBody);
};

export const getEVMTransactions = async (page, limit) => {
	return await fetch(`${EVM_API_URL}/api/getEVMTransactions`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ page, limit }),
	}).then(extractBody);
};
