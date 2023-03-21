import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { extractDataFromAggregate, fetchEvmData } from "@/libs/utils";

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

		const agg = await fetchEvmData("action/aggregate", "Transactions", {
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
						"parsedLogs.parsedFromAbi": "ERC20",
					},
				},
				{
					$unwind: "$parsedLogs",
				},
				{
					$match: {
						"parsedLogs.parsedFromAbi": "ERC20",
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
						localField: "parsedLogs.args.from",
						foreignField: "address",
						as: "fromContract",
					},
				},
				{
					$lookup: {
						from: "Contractaddresses",
						localField: "parsedLogs.args.to",
						foreignField: "address",
						as: "toContract",
					},
				},
				{
					$facet: {
						metadata: [{ $count: "totalDocs" }],
						data: [{ $skip: page * limit }, { $limit: limit }],
					},
				},
			],
		});

		return res.json(extractDataFromAggregate(agg, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
