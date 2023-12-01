import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { ContractData } from "@/libs/providers";
import { fetchMongoData, formatMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let address: string = req.query?.address as string;

		if (!ethers.isAddress(address)) throw { message: "Invalid address" };
		address = ethers.getAddress(address);

		const $match = {
			$or: [{ address: address }, { contractCreator: address }],
		};

		const mongoData = await fetchMongoData(
			"action/aggregate",
			"Contractaddresses",
			{
				pipeline: [
					{
						$match,
					},
					{
						$project: {
							_id: false,
							bytecode: true,
							address: true,
							contractCreator: true,
							deploymentTransactionHash: true,
						},
					},
				],
			}
		);
		const contractData = mongoData?.documents as ContractData[];

		return res.status(200).json({ isContract: true, contractData });
		// return res.json(formatMongoData(agg, meta, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
