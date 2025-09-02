import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import type { ContractData } from "@/libs/providers";
import { fetchContractFiles, fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let address = req.query?.address as string;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const mongoData = await fetchMongoData(
			`ingestor/contractAddress/address/${address}`,
			"GET",
			{}
		);

		const contractData = mongoData?.document as ContractData;
		if (!contractData) return res.status(200).json({ isContract: false });
		// Cache `isContract` for 30 minutes
		res.setHeader("Cache-Control", "max-age=1800, stale-while-revalidate");

		const files = await fetchContractFiles(address);
		if (files) {
			contractData.files = files;
			// Cache files for max
			res.setHeader("Cache-Control", "max-age=31536000, immutable");
		}

		return res.status(200).json({ isContract: true, contractData });
	} catch (err: any) {
		res.status(500).json({ isContract: false, error: err.message });
	}
}
