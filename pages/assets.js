import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	TableLayout,
} from "@/components";
import EthIcon from "@/components/icons/currencies/eth.png";
import AssetsJson from "@/libs/artifacts/Assets.json";
import { IS_MAINNET } from "@/libs/constants";

export default function Assets() {
	const assets = AssetsJson?.tokens?.filter((e) => e.mainnet === IS_MAINNET);
	console.log(assets);

	const icons = {
		// "SYLO": '',
		// "ETH": '',
		// "XRP": '',
		ETH: EthIcon,
		// "ROOT": ''
	};
	return (
		<ContainerLayout>
			<PageHeader
				title={`Assets`}
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
										<TableLayout.HeadItem text="Asset Id" />
										<TableLayout.HeadItem text="Token" />
										<TableLayout.HeadItem text="Symbol" />
										<TableLayout.HeadItem text="Website" />
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-800 bg-transparent">
									{assets.map((asset, key) => (
										<tr key={key}>
											<TableLayout.Data>Icon</TableLayout.Data>
											<TableLayout.Data>{asset.assetId}</TableLayout.Data>
											<TableLayout.Data>{asset.name}</TableLayout.Data>
											<TableLayout.Data>{asset.symbol}</TableLayout.Data>
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
