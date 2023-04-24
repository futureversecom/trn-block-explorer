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
			projection: {
				_id: false,
				abi: true,
				files: true,
				verified: true,
				bytecode: true,
				compilerVersion: true,
				optimizationRuns: true,
				optimizationEnabled: true,
			},
		});

		const contractData = data?.document;

		if (contractData)
			// Revalidate every 30 minutes in case of contract verification
			res.setHeader("Cache-Control", "max-age=1800, stale-while-revalidate");

		return res.json({ isContract: !!contractData, contractData });
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
