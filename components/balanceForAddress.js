import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import QRCode from "react-qr-code";

import { LoadingBlock, RefetchIndicator } from "@/components";
import { CopyToClipboard } from "@/components/icons";
import { useGetBalanceQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { getAssetMetadata } from "@/libs/utils";

export default function BalanceForAddress({ walletAddress }) {
	const query = usePolling(
		{},
		useGetBalanceQuery,
		{
			address: walletAddress,
		},
		12000
	);

	const balance = query?.data?.balances?.account_by_pk;

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
				<div className=" h- divide-y border border-gray-400 bg-transparent px-4 py-3 sm:px-6">
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
							<div className="px-4 py-5 sm:p-0">
								<dl className="sm:divide-y sm:divide-gray-200">
									<Balance title="Total">
										{ethers.utils.formatUnits(balance?.total || "0", 6)} ROOT
									</Balance>
									<Balance title="Free">
										{ethers.utils.formatUnits(balance?.free || "0", 6)} ROOT
									</Balance>
									{balance?.assets?.map(({ assetId, balance }) => {
										const { symbol, decimals } = getAssetMetadata(assetId);
										return (
											<Balance key={assetId} title={symbol}>
												{ethers.utils.formatUnits(balance || "0", decimals)}
											</Balance>
										);
									})}
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
			<div className="text-sm font-medium text-white">{children}</div>
		</div>
	);
};
