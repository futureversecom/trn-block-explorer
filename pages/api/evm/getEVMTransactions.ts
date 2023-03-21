import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchEvmData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { page, limit } = req.body;
		if (!page) page = 1;
		if (!limit) limit = 10;

		const agg = await fetchEvmData("action/aggregate", "Transactions", {
			pipeline: [
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
