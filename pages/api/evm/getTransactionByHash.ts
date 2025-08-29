import type { NextApiRequest, NextApiResponse } from "next";

import { fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const transactionHash = req.query?.transactionHash as string;
		if (!transactionHash.startsWith("0x") || transactionHash?.length !== 66)
			throw { message: "Invalid txHash" };

		const [query, price] = await Promise.all([
			fetchMongoData("ingestor/transactions/action/aggregate", "POST", {
				pipeline: [
					{
						$match: {
							$or: [{ transactionHash }, { hash: transactionHash }],
						},
					},
					{
						$lookup: {
							from: "Contractaddresses",
							localField: "parsedLogs.address",
							foreignField: "address",
							as: "contractData",
						},
					},
					{
						$lookup: {
							from: "Contractaddresses",
							localField: "from",
							foreignField: "address",
							as: "fromContract",
						},
					},
					{
						$lookup: {
							from: "Contractaddresses",
							localField: "to",
							foreignField: "address",
							as: "toContract",
						},
					},
				],
			}),
			fetchMongoData("/ingestor/price/name/XRP", "GET", {}),
		]);

		if (!query?.documents?.length)
			throw {
				message:
					"Transaction not found. If you just emitted this transaction wait for one of our nodes to pick it up.",
			};

		res.setHeader("Cache-Control", "max-age=31536000, immutable");
		return res.json({
			...query.documents[0],
			xrpPrice: price?.document,
		});
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
