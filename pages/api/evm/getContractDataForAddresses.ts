import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { ContractData } from "@/libs/providers";
import { fetchMongoData, formatMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let addresses: string[] = req.query?.addresses as string[];

		addresses = addresses.map((address) => {
			if (!ethers.isAddress(address)) throw { message: "Invalid address" };
			return ethers.getAddress(address);
		});
		//{ tags: { $all: [ "ssl" , "security" ] } }

		const $match = {
			address: {
				$all: addresses,
			},
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
