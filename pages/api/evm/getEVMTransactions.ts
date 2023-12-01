import type { NextApiRequest, NextApiResponse } from "next";

import { fetchMongoData, formatMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let page: number, limit: number;
		page = Number(req.query?.page) ?? 1;
		limit = Number(req.query?.limit) ?? 10;

		const [agg, meta] = await Promise.all([
			fetchMongoData("action/aggregate", "Transactions", {
				pipeline: [
					{ $sort: { blockNumber: -1, firstSeen: 1 } },
					{ $skip: (page - 1) * limit },
					{ $limit: limit },
					{
						$project: {
							_id: false,
							hash: true,
							transactionHash: true,
							blockNumber: true,
							from: true,
							to: true,
							value: true,
							parsedData: true,
							timestamp: true,
							firstSeen: true,
							creates: true,
							status: true,
						},
					},
				],
			}),
			fetchMongoData("action/aggregate", "Transactions", {
				pipeline: [
					{
						$facet: {
							metadata: [{ $count: "totalDocs" }],
						},
					},
				],
			}),
		]);

		return res.json(formatMongoData(agg, meta, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
