import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let address = req.query?.address as string;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const data = await fetchMongoData("action/findOne", "Contractaddresses", {
			filter: {
				address: ethers.getAddress(address),
			},
		});

		const contractData = data?.document;
		return res.json({ isContract: !!contractData, contractData });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
