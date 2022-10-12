import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useMemo, useState } from "react";
import QRCode from "react-qr-code";

import { CopyToClipboard } from "@/components/icons";
import { useGetBalanceQuery } from "@/libs/api/generated.ts";
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
									<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
										<div className="flex flex-row space-x-3 text-sm font-medium text-white">
											<div>
												<QRCode
													value={walletAddress}
													size={64}
													className="rounded-full"
												/>
											</div>
											<div className="my-auto text-lg">Unknown</div>
										</div>
									</div>
									<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
										<div className="flex flex-row space-x-3 text-sm font-medium text-white">
											<p className="truncate md:whitespace-normal">
												{walletAddress}
											</p>
											<div className="my-auto">
												<CopyToClipboard value={walletAddress} />
											</div>
										</div>
									</div>
								</dl>
							</div>
						</div>
						<div>
							<div
								className={clsx(
									"max-h-[16em] px-4 py-5 sm:p-0",
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

		if (!viewFull) afterDec = afterDec.slice(0, 6);

		return `${beforeDec}.${afterDec}`;
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
