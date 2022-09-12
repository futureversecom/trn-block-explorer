import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import TimeAgo from "react-timeago";
import Link from "next/link";
import {
	useGetTransfersFromAddressQuery,
	useGetTransfersToAddressQuery,
} from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { useMemo } from "react";
import {
	LoadingBlock,
	RefetchIndicator,
	TableLayout,
	AddressLink,
} from "@/components";
import { utils as ethers } from "ethers";
import clsx from "clsx";

export default function TransfersForAddress({ walletAddress }) {
	const query = useTransfers(walletAddress);

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
					<h3 className="text-md font-medium leading-6 text-gray-900">
						Transfers
					</h3>
				</div>
				<div>{query.isRefetching && <RefetchIndicator />}</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Transfers" height="h-20" />
			) : (
				<div className="divide-y rounded-md border border-gray-100 bg-white shadow-md">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-gray-50">
								<tr>
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
									<TableLayout.HeadItem text="Method" />
									<TableLayout.HeadItem text="Token" />
									<TableLayout.HeadItem text="Amount" />
									<TableLayout.HeadItem text="From" />
									<TableLayout.HeadItem text="To" />
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{query.data.map((transfer, key) => (
									<tr key={key}>
										<TableLayout.Data dataClassName="!text-indigo-500">
											<Link href={`/block/${transfer.blockNumber}`}>
												{transfer.blockNumber}
											</Link>
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.from.id.toLowerCase() ==
											walletAddress.toLowerCase()
												? "Out"
												: "In"}
										</TableLayout.Data>

										<TableLayout.Data>
											<TimeAgo date={transfer.timestamp} />
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.transferType || "?"}
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												transfer.token?.uri && "!text-indigo-500"
											)}
										>
											<Token tokenUri={transfer.token?.uri}>
												{transfer.token.symbol || "?"}
											</Token>
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.token?.uri
												? transfer.amount
												: ethers.formatUnits(
														transfer.amount,
														transfer.decimals
												  )}
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												transfer.from.id !== walletAddress && "!text-indigo-500"
											)}
										>
											<AddressLink
												address={transfer.from.id}
												isAccount={transfer.from.id === walletAddress}
											/>
										</TableLayout.Data>

										<TableLayout.Data
											dataClassName={clsx(
												transfer.to.id !== walletAddress && "!text-indigo-500"
											)}
										>
											<AddressLink
												address={transfer.to.id}
												isAccount={transfer.to.id === walletAddress}
											/>
										</TableLayout.Data>
									</tr>
								))}
							</tbody>
						</TableLayout.Table>
					) : (
						<div className="space-x-3 text-center">😥 No Transfers</div>
					)}
				</div>
			)}
		</div>
	);
}

const Token = ({ tokenUri, children }) => {
	const formatUri = (uri) =>
		uri.includes("ipfs/")
			? `https://gateway.pinata.cloud/ipfs/${tokenUri.split("ipfs/")[1]}`
			: uri;

	if (tokenUri)
		return (
			<a href={formatUri(tokenUri)} target="__blank" rel="noopener noreferrer">
				{children}
			</a>
		);

	return <span>{children}</span>;
};

const useTransfers = (address) => {
	const {
		data: toData,
		isError: isToError,
		isLoading: isToLoading,
	} = usePolling(
		{},
		useGetTransfersToAddressQuery,
		{
			address,
		},
		12000
	);

	const {
		data: fromData,
		isError: isFromError,
		isLoading: isFromLoading,
	} = usePolling(
		{},
		useGetTransfersFromAddressQuery,
		{
			address,
		},
		12000
	);

	const toTransfers = useFormatTransfers(toData);
	const fromTransfers = useFormatTransfers(fromData);

	let txnHashes = [];

	return {
		data: [...(toTransfers ?? []), ...(fromTransfers ?? [])]
			.reduce((acc, curr) => {
				if (!txnHashes.includes(curr.txnHash)) {
					acc.push(curr);
					txnHashes.push(curr.txnHash);
				}

				return acc;
			}, [])
			.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)),
		isError: isToError || isFromError,
		isLoading: isToLoading || isFromLoading,
	};
};

const useFormatTransfers = (data) =>
	useMemo(() => {
		if (!data) return [];

		return [
			...(data?.tokens?.ftTransfers ?? []),
			...(data?.tokens?.nftTransfers ?? []),
		].sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
	}, [data]);
