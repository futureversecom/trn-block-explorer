import BigNumber from "bignumber.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { InOutLabel, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { formatAddress } from "@/libs/utils";

export default function EVMTransactionsTable({ query, walletAddress }) {
	const router = useRouter();

	return (
		<div className="divide-y overflow-x-auto border border-gray-400 text-white">
			{query?.data?.docs?.length && router.pathname !== "/evmtransactions" ? (
				<div className="px-3 py-3 text-sm">
					Displaying {parseInt(query?.data?.docs?.length)} from a total of{" "}
					{query?.data?.totalDocs} transactions
				</div>
			) : null}
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
							{walletAddress && <TableLayout.HeadItem text="Type" />}
							<TableLayout.HeadItem text="To" />
							<TableLayout.HeadItem text="Value" />
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-800 bg-transparent">
						{query?.data?.docs?.map((tx) => {
							let type;
							if (walletAddress) {
								if (tx?.from == walletAddress) {
									type = "out";
								}
								if (tx?.to == walletAddress) {
									type = "in";
								}
								if (tx?.to == tx?.from) {
									type = "self";
								}
							}
							return (
								<EvmTransactionsForAddressRow
									key={tx?.transactionHash || tx?.hash}
									transactionHash={tx?.transactionHash || tx?.hash}
									block={tx?.blockNumber}
									from={tx?.from}
									method={tx?.parsedData?.name}
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
	);
}

const EvmTransactionsForAddressRow = ({
	block,
	method,
	timestamp,
	from,
	walletAddress,
	transactionHash,
	to,
	toContract,
	fromContract,
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

			<TableLayout.Data dataClassName="text-center">
				{method ? (
					<span className="inline-flex items-center rounded bg-gray-800 px-2 py-0.5 text-xs font-medium capitalize text-gray-100">
						{method}
					</span>
				) : (
					" - "
				)}
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

			{walletAddress && (
				<TableLayout.Data>
					<InOutLabel type={type} />
				</TableLayout.Data>
			)}

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

			<TableLayout.Data dataClassName="text-center">
				{typeof value !== "undefined"
					? `${new BigNumber(value?.toString())
							.dividedBy(new BigNumber(10).pow(18))
							.toString()} XRP`
					: " - "}
			</TableLayout.Data>
		</tr>
	);
};
