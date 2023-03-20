import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { getMongoInstance } from "@/libs/utils";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { address } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };
		address = ethers.getAddress(address);

		const DB = await getMongoInstance();

		const data = await DB.model("Transaction").aggregate([
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
				$match: {
					"parsedLogs.name": "Transfer",
					"parsedLogs.parsedFromAbi": "ERC721",
				},
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
				$match: {
					to: address,
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
				$lookup: {
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
			},
			{
				$sort: { balance: -1 },
			},
		]);

		return res.json(data);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
