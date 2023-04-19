import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const limit = 10;
		const page = Number(req.query?.page) ?? 1;
		let address: string = req.query?.address as string;

		if (!ethers.isAddress(address)) throw { message: "Invalid address" };
		address = ethers.getAddress(address);

		const agg = await fetchMongoData("action/aggregate", "Transactions", {
			pipeline: [
				{
					$match: {
						$or: [{ to: address }, { from: address }],
					},
				},
				{ $sort: { blockNumber: -1, firstSeen: 1 } },
				{ $limit: limit },
				{
					$project: {
						_id: false,
						args: true,
						parsedLogs: true,
						contractData: true,
						hash: true,
						transactionHash: true,
						blockNumber: true,
						from: true,
						to: true,
						timestamp: true,
						firstSeen: true,
						status: true,
						creates: true,
						value: true,
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "contractAddress",
						foreignField: "address",
						as: "parsedLogs.contractData",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "from",
						foreignField: "address",
						as: "fromContract",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "to",
						foreignField: "address",
						as: "toContract",
					},
				},
				{
					$facet: {
						metadata: [{ $count: "totalDocs" }],
						data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
					},
				},
			],
		});

		res.setHeader("Cache-Control", "max-age=1800, stale-while-revalidate");
		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
