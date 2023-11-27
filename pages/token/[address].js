import { useQuery } from "@tanstack/react-query";
import { BigNumber, utils as ethers } from "ethers";

import {
	ContainerLayout,
	FormattedBalance,
	LoadingBlock,
	PageHead,
	RefetchIndicator,
} from "@/components";
import { TokenIcon } from "@/components/icons";
import { CopyToClipboard } from "@/components/icons";
import { useRootApi } from "@/libs/stores";
import { getAssetMetadata } from "@/libs/utils";

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
									<TokenIcon
										height={48}
										symbol={asset.symbol}
										iconClassName="m-2 mx-auto my-auto pl-2 md:pl-0"
									/>
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
								<MetadataRow label="ID">{asset.assetId}</MetadataRow>
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

			return {
				...getAssetMetadata(assetId),
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
