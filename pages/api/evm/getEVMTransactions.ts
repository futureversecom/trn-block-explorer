import type { NextApiRequest, NextApiResponse } from "next";

import { getMongoInstance } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { page, limit } = req.body;
		if (!page) page = 1;
		if (!limit) limit = 10;

		const DB = await getMongoInstance();

		const data = await (DB.model("Transaction") as any).paginate(
			{},
			{
				page,
				limit,
				collation: {
					locale: "en",
				},
				lean: true,
				select: "-_id -processed -createdAt -updatedAt",
				sort: { blockNumber: -1, firstSeen: 1 },
				populate: "fromContract toContract parsedLogs.contractData",
			}
		);

		return res.json(data);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
