import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Fragment, useEffect, useMemo } from "react";

import { LoadingBlock, Pagination, TableLayout, TimeAgo } from "@/components";
import AddressLink from "@/components/evm/AddressLink";
import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import TransactionStatus from "@/components/evm/TransactionStatus";
import { BlockFinalizedIcon } from "@/components/icons";
import { getERC721TransferForAddress } from "@/libs/evm-api";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

import InOutLabel from "./inOutLabel";

export default function Erc721TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("accountEvmTransactions");

	const query = useQuery(
		["erc721_transfers", walletAddress, currentPage],
		() => {
			return getERC721TransferForAddress(walletAddress);
		}
	);

	const pageSlice = useMemo(() => (currentPage - 1) * 10, [currentPage]);

	useAccountRefetchStatus("accountEvmTransactions", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="ERC721 Transfers" height="h-20" />
			) : (
				<div className="divide-y overflow-x-auto border border-gray-400 text-white">
					{query?.data?.docs?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-transparent">
								<tr>
									<TableLayout.HeadItem text="Status" />
									<TableLayout.HeadItem text="Tx Hash" />
									{/* <TableLayout.HeadItem text="Method" /> */}
									<TableLayout.HeadItem text="Block" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="To" />
									<TableLayout.HeadItem text="Name" />
									<TableLayout.HeadItem text="TokenId" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-800 bg-transparent">
								{query?.data?.docs?.map((tx, key) => {
									let type;
									let currentArg = tx?.parsedLogs;
									if (currentArg?.args?.from == walletAddress) {
										type = "out";
									}
									if (currentArg?.args?.to == walletAddress) {
										type = "in";
									}
									if (currentArg?.args?.to == currentArg?.args?.from) {
										type = "self";
									}
									const contractData =
										Object.getPrototypeOf(currentArg?.contractData) ===
										Object.prototype
											? currentArg?.contractData
											: currentArg?.contractData?.[0];

									currentArg.contractData = contractData;
									const name = `${contractData?.name} (${contractData?.symbol})`;
									return (
										<EvmTransactionsForAddressRow
											key={key}
											transactionHash={tx?.transactionHash || tx?.hash}
											tx={tx}
											block={tx?.blockNumber}
											from={currentArg?.args?.from}
											// method={tx?.parsedData?.name || " - "}
											timestamp={tx?.timestamp || tx?.firstSeen}
											to={currentArg?.args?.to}
											isDeployment={tx?.creates || false}
											walletAddress={walletAddress}
											success={tx?.status == 1 ? true : false}
											type={type}
											value={tx?.value}
											tokenId={currentArg?.args?.tokenId}
											name={name}
											fromContract={tx?.fromContract}
											toContract={tx?.toContract}
											log={currentArg}
										/>
									);
								})}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="py-2 text-center">😥 No ERC721 Transfers</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table="accountEvmTransactions" />}
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
	tokenId,
	toContract,
	fromContract,
	success,
	type,
	isDeployment,
	name,
	log,
	tx,
}) => {
	return (
		<tr>
			<TableLayout.Data dataClassName="my-auto">
				{/* <BlockFinalizedIcon status={success} isExtrinsic={true} /> */}
				<TransactionStatus tx={tx} />
			</TableLayout.Data>
			<TableLayout.Data dataClassName="!text-indigo-500">
				<Link href={`/tx/${transactionHash}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{formatAddress(transactionHash, 3)}
					</span>
				</Link>
			</TableLayout.Data>

			{/* <TableLayout.Data>
				<span className="inline-flex items-center rounded bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-100 capitalize">
					{method || " - "}
				</span>
			</TableLayout.Data> */}

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
			<TableLayout.Data>{name}</TableLayout.Data>
			<TableLayout.Data>{tokenId}</TableLayout.Data>
			<TableLayout.Data>
				{log?.contractData?.uri && (
					<DisplayNFTImage
						key={log?.args?.tokenId}
						args={log?.args}
						uri={log?.contractData?.uri}
						width={75}
						height={75}
					/>
				)}
			</TableLayout.Data>
		</tr>
	);
};

const usePages = (transferCount) => {
	const { setPages } = usePagination("accountEvmTransactions");

	useEffect(() => {
		if (!transferCount) return;

		setPages(Array.from(Array(Math.ceil(transferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transferCount]);
};
