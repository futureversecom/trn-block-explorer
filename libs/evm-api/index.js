import fetch from "node-fetch";

const BASE_URL = "http://localhost:3001";

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
	return await fetch(`${BASE_URL}/api/getTransactionByHash`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ transactionHash }),
	}).then((response) => {
		return extractBody(response);
	});
};

export const getTransactionsForAddress = async (address, page) => {
	return await fetch(`${BASE_URL}/api/getTransactionByHash`, {
		method: "POST",
		...headers(),
		body: JSON.stringify({ address, page }),
	}).then((response) => {
		return extractBody(response);
	});
};
