import Mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { ROOT_NETWORK } from "@/libs/constants";
import "@/libs/models";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { txHash } = req.body;
		if (!txHash.startsWith("0x") || txHash?.length !== 66)
			throw { message: "Invalid txHash" };

		const DB = await Mongoose.connect(ROOT_NETWORK.MongoUri);

		let data: any = {};
		const query = await DB.model("Transaction")
			.findOne({
				$or: [{ txHash }, { hash: txHash }],
			})
			.populate("fromContract toContract parsedLogs.contractData")
			.lean();

		data = query;

		if (data) {
			const price = await DB.model("Price")
				.findOne({ name: "XRP" })
				.select("-_id")
				.lean();
			if (price) {
				data.xrpPrice = price;
			}
		} else {
			throw {
				message:
					"Transaction not found. If you just emitted this transaction wait for one of our nodes to pick it up.",
			};
		}

		return res.json(data);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
