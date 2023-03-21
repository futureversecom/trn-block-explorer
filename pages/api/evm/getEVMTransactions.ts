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
					$facet: {
						metadata: [{ $count: "totalDocs" }],
						data: [{ $skip: page * limit }, { $limit: limit }],
					},
				},
			],
		});

		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
