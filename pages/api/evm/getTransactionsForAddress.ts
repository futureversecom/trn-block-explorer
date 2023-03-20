import { utils as ethers } from "ethers";
import Mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { ROOT_NETWORK } from "@/libs/constants";
import "@/libs/models";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { address, page } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const DB = await Mongoose.connect(ROOT_NETWORK.MongoUri);

		if (!page) page = 1;
		address = ethers.getAddress(address);

		const data = await (DB.model("Transaction") as any).paginate(
			{ $or: [{ to: address }, { from: address }] },
			{
				page,
				limit: 10,
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
