import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let page: number, limit: number;
		page = Number(req.query?.page) ?? 1;
		limit = Number(req.query?.limit) ?? 10;

		const agg = await fetchMongoData("action/aggregate", "Transactions", {
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

		res.setHeader("Cache-Control", "max-age=1800, stale-while-revalidate");
		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
