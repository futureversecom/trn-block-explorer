import clsx from "clsx";
import { Fragment } from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import TokenBalances from "@/components/evm/tokenBalances";
import { CopyToClipboard } from "@/components/icons";
import { useGetBalanceQuery } from "@/libs/api/generated.ts";
import { BURN_ADDRESSES } from "@/libs/constants";
import { usePolling } from "@/libs/hooks";
import { useContract } from "@/libs/providers";
import { formatAddress } from "@/libs/utils";

import { FormattedBalance, LoadingBlock, RefetchIndicator, TextLink } from "./";

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

	const { isContract, contractData } = useContract();

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
												{isContract ? "Contract Address" : "Wallet"}
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
									<FormattedBalance
										assetId={1}
										balance={balance?.free ?? 0}
										displaySymbol
									/>
								</Balance>
								<Balance title="XRP Balance">
									<FormattedBalance
										displaySymbol
										assetId={2}
										balance={xrpBalance?.balance ?? 0}
									/>
								</Balance>

								{otherTokens?.length ? (
									<Balance title="Other Tokens">
										{otherTokens.map((asset) => (
											<FormattedBalance
												displaySymbol
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
							{contractData?.contractCreator &&
							contractData?.deploymentTransactionHash ? (
								<Balance title="Contract Creator">
									<div className="space-x-1 text-sm text-white">
										<TextLink
											text={formatAddress(contractData?.contractCreator)}
											link={`/address/${contractData?.contractCreator}`}
										/>
										<span>at txn:</span>
										<TextLink
											text={formatAddress(
												contractData?.deploymentTransactionHash
											)}
											link={`/tx/${contractData?.deploymentTransactionHash}`}
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
