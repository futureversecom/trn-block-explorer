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
		const { address } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const DB = await Mongoose.connect(ROOT_NETWORK.MongoUri);

		const contractData = await DB.model("Contractaddress")
			.findOne({ address: ethers.getAddress(address) })
			.select("-_id")
			.lean();

		return res.json({ isContract: !!contractData, contractData });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
