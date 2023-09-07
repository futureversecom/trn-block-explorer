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
		address = ethers.getAddress(address);

		const data = await fetchMongoData("action/aggregate", "Transactions", {
			pipeline: [
				{
					$match: {
						"parsedLogs.name": "Transfer",
						"parsedLogs.parsedFromAbi": "ERC721",
						"$or": [
							{
								"parsedLogs.args.from": address,
							},
							{
								"parsedLogs.args.to": address,
							},
						],
					},
				},
				{
					$unwind: "$parsedLogs",
				},
				{
					$sort: {
						blockNumber: 1,
					},
				},
				{
					$project: {
						event: "$parsedLogs.name",
						from: "$parsedLogs.args.from",
						to: "$parsedLogs.args.to",
						tokenId: "$parsedLogs.args.tokenId",
						address: "$parsedLogs.address",
						blockNumber: "$parsedLogs.blockNumber",
					},
				},
				{
					$group: {
						_id: {
							$concat: ["$address", "_", "$tokenId"],
						},
						tokenId: {
							$last: "$tokenId",
						},
						to: {
							$last: "$to",
						},
						address: {
							$last: "$address",
						},
					},
				},
				{
					$group: {
						_id: "$address",
						tokenIds: {
							$addToSet: "$tokenId",
						},
						balance: {
							$sum: 1,
						},
					},
				},
				{
					$lookup: { // join with table Contractaddresses
						from: "Contractaddresses",
						localField: "_id",
						foreignField: "address",
						as: "contractData",
					},
				},
				{
					$addFields: {
						address: "$_id",
					},
				},
				{
					$unset: "_id",
				}
			],
		});

		return res.json(data.documents);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
