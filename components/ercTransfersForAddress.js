import clsx from "clsx";
import { utils as ethers } from "ethers";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import TimeAgo from "react-timeago";

import {
	AddressLink,
	LoadingBlock,
	Pagination,
	TableLayout,
} from "@/components";
import { useGetErcTransfersForAddressQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { useAccountRefetchStatus, usePagination } from "@/libs/stores";

export default function TransfersForAddress({ walletAddress }) {
	const { pages, currentPage } = usePagination("ercTransfers");

	const query = useTransfers(walletAddress, (currentPage - 1) * 5);

	useAccountRefetchStatus("ercTransfers", query.isRefetching);

	return (
		<div>
			{query.isLoading ? (
				<LoadingBlock title="Transfers" height="h-20" />
			) : (
				<div className="divide-y rounded-md border border-gray-100 bg-white">
					{query?.data?.length > 0 ? (
						<TableLayout.Table>
							<thead className="bg-gray-50">
								<tr>
									<TableLayout.HeadItem text="Height" />
									<TableLayout.HeadItem text="Type" />
									<TableLayout.HeadItem text="Timestamp" />
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
											<Link href={`/block/${transfer.block_number}`}>
												{transfer.block_number}
											</Link>
										</TableLayout.Data>

										<TableLayout.Data>
											{transfer.from_id.toLowerCase() ==
											walletAddress.toLowerCase()
												? "Out"
												: "In"}
										</TableLayout.Data>

										<TableLayout.Data>
											<TimeAgo date={transfer.timestamp} />
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
						<div className="py-2 text-center">😥 No ERC Transfers</div>
					)}
				</div>
			)}

			{pages?.length > 1 && <Pagination table="ercTransfers" />}
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

const useTransfers = (address, offset) => {
	const query = usePolling(
		{},
		useGetErcTransfersForAddressQuery,
		{
			address,
			offset,
		},
		12000
	);

	usePages(query.data);

	return {
		data: [
			...(query?.data?.erc?.ft_transfer ?? []),
			...(query?.data?.erc?.nft_transfer ?? []),
		].sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1)),
		...query,
	};
};

const usePages = (data) => {
	const { setPages } = usePagination("ercTransfers");

	const ercTransferCount = useMemo(() => {
		if (!data) return;

		return (
			data?.erc?.ft_transfer_aggregate?.aggregate?.count +
			data?.erc?.nft_transfer_aggregate?.aggregate?.count
		);
	}, [data]);

	useEffect(() => {
		if (!data?.erc) return;

		setPages(Array.from(Array(Math.floor(ercTransferCount / 10))));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.erc]);
};
