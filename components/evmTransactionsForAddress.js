import { useQuery } from "@tanstack/react-query";
import BigNumber from "bignumber.js";
import Link from "next/link";
import { Fragment, useState } from "react";
import { LoadingBlock, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import EVMPagination from "@/components/evm/evmpagination";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { getTransactionsForAddress } from "@/libs/evm-api";
import { formatAddress } from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function EvmTransactionsForAddress({ walletAddress }) {
	const [page, setPage] = useState(1);

	const query = useQuery(
		["evm_transactions", walletAddress, page],
		() => {
			return getTransactionsForAddress(walletAddress, page);
		},
		{
			refetchInterval: 15_000,
		}
	);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Evm Transactions" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.docs?.length ? (
						<div className="text-sm px-3 py-3">
							Displaying {parseInt(query?.data?.limit * query?.data?.page)} from
							a total of {query?.data?.totalDocs} transactions
						</div>
					) : (
						<Fragment />
					)}
					{query?.data?.docs?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Status" />
									<TableLayout.HeadItem text="Tx Hash" />
									<TableLayout.HeadItem text="Method" />
									<TableLayout.HeadItem text="Block" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Value" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query?.data?.docs?.map((tx, key) => {
									let type;
									if (tx?.from == walletAddress) {
										type = "out";
									}
									if (tx?.to == walletAddress) {
										type = "in";
									}
									if (tx?.to == tx?.from) {
										type = "self";
									}
									return (
										<EvmTransactionsForAddressRow
											key={tx?.transactionHash || tx?.hash || key}
											transactionHash={tx?.transactionHash || tx?.hash}
											block={tx?.blockNumber}
											from={tx?.from}
											method={tx?.parsedData?.name || " - "}
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={tx?.to || tx?.creates}
											isDeployment={tx?.creates || false}
											walletAddress={walletAddress}
											success={tx?.status == 1 ? true : false}
											type={type}
											value={tx?.value}
											fromContract={tx?.fromContract}
											toContract={tx?.toContract}
											tx={tx}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No EVM Transactions</div>
					)}
				</div>
			)}

			<EVMPagination data={query?.data} onPageChange={(p) => setPage(p)} />
		</div>
	);
}

const EvmTransactionsForAddressRow = ({
	block,
	method,
	timestamp,
	from,
	transactionHash,
	to,
	walletAddress,
	toContract,
	fromContract,
	success,
	type,
	value,
	isDeployment,
	tx,
}) => {
	return (
		<tr>
			<TableLayout.Data dataClassName="flex">
				<TransactionStatus tx={tx} />
			</TableLayout.Data>
			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/tx/${transactionHash}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(transactionHash)}
					</span>
				</Link>
			</TableLayout.Data>

			<TableLayout.Data>
				<span className="inline-flex items-center rounded bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-100 capitalize">
					{method || " - "}
				</span>
			</TableLayout.Data>

			<TableLayout.Data>
				{block ? (
					<Link href={`/block/${block}`}>
						<span className="cursor-pointer text-indigo-500 hover:text-white">
							{block}
						</span>
					</Link>
				) : (
					"-"
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				{timestamp ? <TimeAgo timestamp={timestamp * 1000} /> : "?"}
			</TableLayout.Data>

			<TableLayout.Data>
				{from ? (
					<div className="flex space-x-2">
						<AddressLink
							address={from}
							contractData={fromContract}
							format
							hideCopyButton
						/>
					</div>
				) : (
					" - "
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				<InOutLabel type={type} />
			</TableLayout.Data>

			<TableLayout.Data>
				{to ? (
					<div className="flex space-x-2">
						{isDeployment && <div>Created</div>}
						<AddressLink
							address={to}
							contractData={toContract}
							format
							hideCopyButton
						/>
					</div>
				) : (
					<Fragment />
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				{new BigNumber(value.toString())
					.dividedBy(new BigNumber(10).pow(18))
					.toString()}{" "}
				XRP
			</TableLayout.Data>
		</tr>
	);
};
