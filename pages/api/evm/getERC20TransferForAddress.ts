import { utils as ethers } from "ethers";
import Mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

import { ROOT_NETWORK } from "@/libs/constants";
import "@/libs/models";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let { address, page } = req.body;
		if (!ethers.isAddress(address)) throw { message: "Invalid address" };

		const DB = await Mongoose.connect(ROOT_NETWORK.MongoUri);

		if (!page) page = 1;
		address = ethers.getAddress(address);

		const options = {
			page,
			limit: 10,
			collation: {
				locale: "en",
			},
			lean: true,
			select: "-_id -processed -createdAt -updatedAt",
			sort: "-blockNumber",
			populate: "fromContract toContract parsedLogs.contractData",
		};

		const agg = DB.model("Transaction").aggregate([
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
		]);

		const data = await DB.model("Transaction").aggregatePaginate(agg, options);

		return res.json(data);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
