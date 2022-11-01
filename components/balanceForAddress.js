import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useMemo, useState } from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import { CopyToClipboard } from "@/components/icons";
import { useGetBalanceQuery } from "@/libs/api/generated.ts";
import { BURN_ADDRESSES } from "@/libs/constants";
import { usePolling } from "@/libs/hooks";
import { formatBalance, getAssetMetadata } from "@/libs/utils";

import { LoadingBlock, RefetchIndicator } from "./";

export default function BalanceForAddress({ walletAddress }) {
	const query = usePolling(
		{},
		useGetBalanceQuery,
		{
			address: walletAddress,
		},
		12000
	);

	const balance = query?.data?.balances?.account[0];

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-medium leading-6 text-white">Balance</h3>
				</div>
				<div>{query.isRefetching && <RefetchIndicator />}</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Balance" height="h-20" />
			) : (
				<div className="divide-y border border-gray-400 bg-transparent px-4 py-3 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div>
							<div className=" px-4 py-5 sm:p-0">
								<dl>
									<div className="py-4 outline outline-0 sm:py-5 sm:px-6">
										<div className="flex w-full flex-row space-x-3 text-sm font-medium text-white">
											<div>
												<Jazzicon
													className="block"
													diameter={64}
													seed={jsNumberForAddress(walletAddress)}
												/>
											</div>

											<div className="flex-1">
												<div className="my-auto text-lg">Unknown</div>
												<div className="text-md flex items-center truncate leading-6 text-white">
													{walletAddress}
													<CopyToClipboard
														value={walletAddress}
														className="ml-1 inline-block"
													/>
												</div>
											</div>
										</div>
									</div>
									{BURN_ADDRESSES.includes(walletAddress.toLowerCase()) && (
										<div className="max-w-fit py-4 text-sm md:px-6">
											<p className="border border-red-400 bg-red-300 p-2 text-red-800">
												<span className="font-bold">🔥 Attention:</span> This
												address is a known burn address. Funds sent to this
												address are lost forever.
											</p>
										</div>
									)}
								</dl>
							</div>
						</div>
						<div>
							<div
								className={clsx(
									"max-h-[16em] px-4 py-5 sm:p-0 overflow-y-auto",
									balance?.assets?.length > 1 && "overflow-y-scroll"
								)}
							>
								<dl className="sm:divide-y sm:divide-gray-200">
									{["Free", "Reserved", "Total"].map((title) => (
										<Balance title={title} key={title}>
											<FormattedBalance
												assetId={1}
												balance={balance?.[title.toLowerCase()] ?? 0}
											/>
										</Balance>
									))}
									{balance?.assets?.length && (
										<Balance title="Others">
											{balance.assets.map((asset) => (
												<FormattedBalance
													key={asset.assetId}
													assetId={asset.assetId}
													balance={asset.balance}
												/>
											))}
										</Balance>
									)}
									<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6" />
								</dl>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

const Balance = ({ title, children }) => {
	return (
		<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
			<div className="text-sm font-medium text-white">{title}</div>
			<div className="space-y-1 text-sm font-medium text-white">{children}</div>
		</div>
	);
};

const FormattedBalance = ({ balance, assetId }) => {
	const [viewFull, setViewFull] = useState(false);

	const { symbol, decimals } = useMemo(() => {
		const assetIdOrMetadata = getAssetMetadata(String(assetId));

		if (!assetIdOrMetadata?.symbol)
			return {
				symbol: `Asset #${assetId}`,
				decimals: 6,
			};

		return assetIdOrMetadata;
	}, [assetId]);

	const amount = useMemo(() => {
		let [beforeDec, afterDec] = formatBalance(balance, decimals).split(".");
		if (afterDec) {
			if (!viewFull) afterDec = afterDec.slice(0, 6);
			return `${beforeDec}.${afterDec}`;
		} else {
			return beforeDec;
		}
	}, [balance, decimals, viewFull]);

	return (
		<p
			className="whitespace-nowrap"
			onMouseOver={() => setViewFull(true)}
			onMouseOut={() => setViewFull(false)}
		>
			{amount}
			{decimals > 6 && !viewFull && <span>...</span>} {symbol}
		</p>
	);
};
