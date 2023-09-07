import BigNumber from "bignumber.js";
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

		let data = await fetchMongoData("action/aggregate", "Transactions", {
			pipeline: [
				{
					$match: {
						"parsedLogs.name": "Transfer",
						"parsedLogs.parsedFromAbi": "ERC20",
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
						value: "$parsedLogs.args.value",
						address: "$parsedLogs.address",
						blockNumber: "$parsedLogs.blockNumber",
					},
				},
				{
					$group: {
						_id: "$address",
						balance: {
							$push: "$value",
						},
						action: {
							$push: {
								$cond: {
									if: {
										$eq: ["$to", address],
									},
									then: "increase",
									else: "decrease",
								},
							},
						},
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
				{ // join
					$lookup: {
						from: "Contractaddresses",
						localField: "address",
						foreignField: "address",
						as: "contractData",
					},
				},
			],
		});

		if (data?.documents?.length > 0) {
			let contracts: any = Object.assign([], data.documents);
			for (const contract of contracts) {
				let newBalance = new BigNumber(0);
				const { balance, action }: any = contract;
				for (let i = 0; i < balance?.length; i++) {
					const bal = balance[i];
					const act = action[i];
					if (act === "increase") {
						newBalance = newBalance.plus(new BigNumber(bal));
					}
					if (act === "decrease") {
						newBalance = newBalance.minus(new BigNumber(bal));
					}
					if (newBalance.lte("0")) {
						newBalance = new BigNumber("0");
					}
				}
				contract.balance = newBalance.toString();
				if (contract?.action) {
					delete contract.action;
				}
			}
			contracts = contracts.filter((e: any) => e.balance !== "0");
			contracts = contracts.sort((a: any, b: any) =>
				new BigNumber(a.balance).lte(new BigNumber(b.balance))
			);
			data = contracts;
		}

		return res.json(data);
	} catch (err: any) {
		res.status(500).json({ error: err.message });
	}
}
