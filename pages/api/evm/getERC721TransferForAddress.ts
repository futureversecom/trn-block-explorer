import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchMongoData } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { address, page } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };
		if (!page) page = 1;
		const limit = 10;
		address = ethers.getAddress(address);

		const agg = await fetchMongoData("action/aggregate", "Transactions", {
			pipeline: [
				{
					$match: {
						"$or": [
							{
								"parsedLogs.args.from": address,
							},
							{
								"parsedLogs.args.to": address,
							},
							{
								"parsedLogs.address": address,
							},
						],
						"parsedLogs.parsedFromAbi": "ERC721",
					},
				},
				{
					$unwind: "$parsedLogs",
				},
				{
					$match: {
						"parsedLogs.parsedFromAbi": "ERC721",
						"parsedLogs.name": "Transfer",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "parsedLogs.address",
						foreignField: "address",
						as: "parsedLogs.contractData",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "fromContract",
						foreignField: "address",
						as: "fromContract",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "toContract",
						foreignField: "address",
						as: "toContract",
					},
				},
				{ $sort: { blockNumber: -1, firstSeen: 1 } },
				{
					$facet: {
						metadata: [{ $count: "totalDocs" }],
						data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
					},
				},
			],
		});

		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
