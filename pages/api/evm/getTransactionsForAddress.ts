import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { address, page } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };
		if (!page) page = 1;
		const limit = 10;
		address = ethers.getAddress(address);

		const agg = await fetchMongoData("action/aggregate", "Transactions", {
			pipeline: [
				{
					$match: {
						$or: [{ to: address }, { from: address }],
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "contractAddress",
						foreignField: "address",
						as: "parsedLogs.contractData",
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
				{ $sort: { blockNumber: -1, firstSeen: 1 } },
				{
					$facet: {
						metadata: [{ $count: "totalDocs" }],
						data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
					},
				},
			],
		});

		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
