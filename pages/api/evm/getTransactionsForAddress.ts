import { utils as ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";

import { fetchMongoData, formatMongoData } from "@/libs/utils";

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

		const $match = {
			$or: [{ to: address }, { from: address }],
		};

		const [agg, meta] = await Promise.all([
			fetchMongoData("ingestor/transactions/action/aggregate", "POST", {
				pipeline: [
					{
						$match,
					},
					{ $sort: { blockNumber: -1, firstSeen: 1 } },
					{ $skip: (page - 1) * limit },
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
					//{
					//    $lookup:
					//      {
					//        from: <collection to join>,
					//        localField: <field from the input documents>,
					//        foreignField: <field from the documents of the "from" collection>,
					//        as: <output array field>
					//      }
					// }
					// {
					// 	$lookup: {
					// 		from: "Contractaddresses",
					// 		localField: "contractAddress",
					// 		foreignField: "address",
					// 		as: "parsedLogs.contractData",
					// 	},
					// },
					// {
					// 	$lookup: {
					// 		from: "Contractaddresses",
					// 		localField: "from",
					// 		foreignField: "address",
					// 		as: "fromContract",
					// 	},
					// },
					// {
					// 	$lookup: {
					// 		from: "Contractaddresses",
					// 		localField: "to",
					// 		foreignField: "address",
					// 		as: "toContract",
					// 	},
					// },
				],
			}),
			fetchMongoData("ingestor/transactions/action/aggregate", "POST", {
				pipeline: [
					{
						$match,
					},
					{
						$facet: {
							metadata: [{ $count: "totalDocs" }],
						},
					},
				],
			}),
		]);

		return res.json(formatMongoData(agg, meta, page, limit));
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
