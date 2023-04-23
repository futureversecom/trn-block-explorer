import {
	ArrowTopRightOnSquareIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { ContainerLayout, PageHeader, TableLayout } from "@/components";
import { TokenIcon } from "@/components/icons";
import AssetsJson from "@/libs/artifacts/Assets.json";
import { IS_MAINNET } from "@/libs/constants";
import { formatAddress, getAssetPrecompileAddress } from "@/libs/utils";

export default function Tokens() {
	const assets = AssetsJson.tokens
		.filter((e) => e.mainnet === IS_MAINNET && e.symbol !== "ROOT")
		.map((asset) => ({
			...asset,
			address: getAssetPrecompileAddress(asset.assetId),
		}));

	return (
		<ContainerLayout>
			<PageHeader
				title={`Tokens`}
				icon={<CurrencyDollarIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			<div className="mt-0 flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-auto border border-gray-400">
							<TableLayout.Table>
								<thead className="bg-transparent text-white">
									<tr>
										<TableLayout.HeadItem />
										<TableLayout.HeadItem text="Asset ID" />
										<TableLayout.HeadItem text="Token Name" />
										<TableLayout.HeadItem text="Symbol" />
										<TableLayout.HeadItem text="Address" />
										<TableLayout.HeadItem text="Website" />
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-800 bg-transparent">
									{assets.map((asset, key) => (
										<tr key={key}>
											<TableLayout.Data dataClassName="w-16" customPadding>
												<TokenIcon
													height={24}
													symbol={asset?.symbol}
													iconClassName="m-2 mx-auto my-auto pl-2 md:pl-0"
												/>
											</TableLayout.Data>
											<TableLayout.Data>{asset.assetId}</TableLayout.Data>
											<TableLayout.Data>{asset.name}</TableLayout.Data>
											<TableLayout.Data>{asset.symbol}</TableLayout.Data>
											<TableLayout.Data>
												<span className="cursor-pointer text-indigo-500 hover:text-white">
													<Link href={`/token/${asset.address}`}>
														{formatAddress(asset.address)}
													</Link>
												</span>
											</TableLayout.Data>
											<TableLayout.Data>
												<a
													href={asset.external_url}
													target="_blank"
													rel="noreferrer"
												>
													<ArrowTopRightOnSquareIcon className="h-5 w-5 cursor-pointer text-indigo-500 hover:text-white" />
												</a>
											</TableLayout.Data>
										</tr>
									))}
								</tbody>
							</TableLayout.Table>
						</div>
					</div>
				</div>
			</div>
		</ContainerLayout>
	);
}
