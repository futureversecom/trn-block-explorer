import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { Fragment } from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import TokenBalances from "@/components/evm/tokenBalances";
import { CopyToClipboard } from "@/components/icons";
import { useGetBalanceQuery } from "@/libs/api/generated.ts";
import { BURN_ADDRESSES } from "@/libs/constants";
import { isContract } from "@/libs/evm-api";
import { usePolling } from "@/libs/hooks";
import { formatAddress, formatBalance, getAssetMetadata } from "@/libs/utils";

import { LoadingBlock, RefetchIndicator, TextLink } from "./";

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
	const xrpBalance = balance?.assets?.find((e) => e.assetId == 2);
	const otherTokens = balance?.assets?.filter(
		(e) => e.assetId != 1 && e.assetId != 2
	);

	const isContractQuery = useQuery(
		[walletAddress, "isContract"],
		() => {
			return isContract(walletAddress).then((data) => {
				return data;
			});
		},
		{
			refetchInterval: 0,
		}
	);

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<h3 className="text-md font-medium leading-6 text-white">Overview</h3>
				</div>
				<div>{query.isRefetching && <RefetchIndicator />}</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Balance" height="h-20" />
			) : (
				<div className="divide-y border border-gray-400 bg-transparent py-4">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div>
							<Fragment>
								<div className="py-4 px-4 outline outline-0 sm:py-5 sm:px-6">
									<div className="flex w-full flex-row space-x-3 text-sm font-medium text-white">
										<div className="h-16">
											<Jazzicon
												className="my-auto block"
												diameter={64}
												seed={jsNumberForAddress(walletAddress)}
											/>
										</div>

										<div className="my-auto flex-col">
											<div className="text-lg">
												{isContractQuery?.data?.isContract == true
													? "Contract Address"
													: "Wallet"}{" "}
											</div>
											<div className="text-md flex flex-wrap items-center leading-6 text-white md:space-x-2">
												<div className="basis-1/2 truncate md:basis-auto">
													{walletAddress}
												</div>
												<div className="basis-1/2 md:basis-auto">
													<CopyToClipboard
														value={walletAddress}
														className="my-auto ml-1"
													/>
												</div>
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
							</Fragment>
						</div>
						<div
							className={clsx(
								"max-h-[16em] overflow-y-auto px-4 py-5 sm:p-0",
								balance?.assets?.length > 1 && "overflow-y-auto"
							)}
						>
							<dl>
								<Balance title="Root Balance">
									<FormattedBalance assetId={1} balance={balance?.free ?? 0} />
								</Balance>
								<Balance title="XRP Balance">
									<FormattedBalance
										assetId={2}
										balance={xrpBalance?.balance ?? 0}
									/>
								</Balance>

								{otherTokens?.length ? (
									<Balance title="Other Tokens">
										{otherTokens.map((asset) => (
											<FormattedBalance
												key={asset.assetId}
												assetId={asset.assetId}
												balance={asset.balance}
											/>
										))}
									</Balance>
								) : (
									<Fragment />
								)}
							</dl>
							{isContractQuery?.data?.contractData?.contractCreator &&
							isContractQuery?.data?.contractData?.deploymentTransactionHash ? (
								<Balance title="Contract Creator">
									<div className="space-x-1 text-sm text-white">
										<TextLink
											text={formatAddress(
												isContractQuery?.data?.contractData?.contractCreator
											)}
											link={`/address/${isContractQuery?.data?.contractData?.contractCreator}`}
										/>
										<span>at txn:</span>
										<TextLink
											text={formatAddress(
												isContractQuery?.data?.contractData
													?.deploymentTransactionHash
											)}
											link={`/tx/${isContractQuery?.data?.contractData?.deploymentTransactionHash}`}
										/>
									</div>
								</Balance>
							) : (
								<Fragment />
							)}
						</div>
						<div className="flex flex-col space-y-2 py-3 px-4">
							<span className="text-white">Tokens</span>
							<TokenBalances walletAddress={walletAddress} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

const Balance = ({ title, children }) => {
	return (
		<div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
			<div className="text-sm font-medium text-white">{title}</div>
			<div className="col-span-2 space-y-1 text-sm font-medium text-white">
				{children}
			</div>
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
