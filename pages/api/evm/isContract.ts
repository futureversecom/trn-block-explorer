import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { getMongoInstance } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { address } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const DB = await getMongoInstance();

		const contractData = await DB.model("Contractaddress")
			.findOne({ address: ethers.getAddress(address) })
			.select("-_id")
			.lean();

		return res.json({ isContract: !!contractData, contractData });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
