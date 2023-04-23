import { hexToString } from "@polkadot/util";
import { useQuery } from "@tanstack/react-query";
import { BigNumber, utils as ethers } from "ethers";
import Image from "next/future/image";

import {
	ContainerLayout,
	FormattedBalance,
	LoadingBlock,
	PageHead,
	RefetchIndicator,
} from "@/components";
import { CopyToClipboard } from "@/components/icons";
import ASTOIcon from "@/components/icons/currencies/asto.png";
import EthIcon from "@/components/icons/currencies/eth.png";
import SyloIcon from "@/components/icons/currencies/sylo.png";
import USDCIcon from "@/components/icons/currencies/usdc.png";
import XRPIcon from "@/components/icons/currencies/xrp.png";
import { useRootApi } from "@/libs/stores";
import { getAssetMetadata } from "@/libs/utils";

const icons = {
	ROOT: undefined,
	ASTO: ASTOIcon,
	SYLO: SyloIcon,
	ETH: EthIcon,
	XRP: XRPIcon,
	USDC: USDCIcon,
};

export const getServerSideProps = (context) => ({
	props: { address: context?.params?.address },
});

export default function Token({ address }) {
	const query = useAssetQuery(address);
	const asset = query?.data;

	if (!ethers.isAddress(address)) {
		return "Invalid address";
	}

	return (
		<ContainerLayout>
			<PageHead title={`Token ${address}`} />
			<div>
				<div className="flex flex-row justify-between py-3">
					<div className="flex">
						<h3 className="text-md font-medium leading-6 text-white">
							Overview
						</h3>
					</div>
					<div>{query.isRefetching && <RefetchIndicator />}</div>
				</div>
			</div>

			{query.isLoading ? (
				<LoadingBlock title="Token" height="h-20" />
			) : (
				<div className="divide-y border border-gray-400 bg-transparent py-4">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="py-4 px-4 outline outline-0 sm:py-5 sm:px-6">
							<div className="flex w-full flex-row space-x-3 text-sm font-medium text-white">
								<div className="flex h-16 items-center">
									{asset?.icon && (
										<Image
											width={48}
											height={48}
											src={asset.icon}
											alt={asset.symbol}
											className="m-2 mx-auto my-auto pl-2 md:pl-0"
										/>
									)}
								</div>

								<div className="my-auto flex-col">
									<div className="flex items-center text-lg">
										<span className="mr-2 rounded-sm border border-gray-400 px-2 text-sm">
											{asset.symbol}
										</span>{" "}
										{asset.name}
									</div>
									<div className="text-md flex flex-wrap items-center leading-6 text-white md:space-x-2">
										<div className="basis-1/2 truncate md:basis-auto">
											{address}
										</div>
										<div className="basis-1/2 md:basis-auto">
											<CopyToClipboard
												value={address}
												className="my-auto ml-1"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="py-4 px-4 text-white outline outline-0 sm:py-5 sm:px-6">
							<dl>
								<MetadataRow label="Asset ID">{asset.assetId}</MetadataRow>
								<MetadataRow label="Decimals">{asset.decimals}</MetadataRow>
								<MetadataRow label="Holders">{asset.holders}</MetadataRow>
								<MetadataRow label="Total Supply">
									<FormattedBalance
										assetId={asset?.assetId}
										balance={asset?.supply ?? 0}
									/>
								</MetadataRow>
							</dl>
						</div>
					</div>
				</div>
			)}
		</ContainerLayout>
	);
}

const useAssetQuery = (address) => {
	const rootApi = useRootApi();

	return useQuery(
		["token", address],
		async () => {
			if (!rootApi) return null;
			const assetIdHex = address.slice(10, 18);
			const assetId = parseInt(assetIdHex, 16);

			let [asset, metadata] = await Promise.all([
				rootApi.query.assets.asset(assetId),
				rootApi.query.assets.metadata(assetId),
			]);
			if (!asset.isSome) return null;

			asset = asset.toJSON();
			metadata = metadata.toJSON();
			const symbol = Object.keys(icons).find((symbol) =>
				hexToString(metadata.symbol).toUpperCase().includes(symbol)
			);

			return {
				...getAssetMetadata(assetId),
				icon: icons[symbol],
				holders: asset.accounts,
				decimals: metadata.decimals,
				supply: BigNumber.from(asset.supply),
			};
		},
		{
			refetchInterval: 30000,
			enabled: ethers.isAddress(address),
		}
	);
};

const MetadataRow = ({ label, children }) => (
	<div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
		<div className="text-sm font-medium text-white">{label}</div>
		<div className="col-span-2 space-y-1 text-sm font-medium text-white">
			{children}
		</div>
	</div>
);
