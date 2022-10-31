import { ethers } from "ethers";
import { Fragment } from "react";
import Link from 'next/link';
import { DetailsLayout } from "@/components";
import { formatAddress } from "@/libs/utils";
import { getAssetMetadata } from "@/libs/utils/getAssetMetadata";

export default function TransactionActions({ events }) {
	const mapped = {
		"Assets.Transferred": AssetsTransferred,
	};
	return (
		<Fragment>
			{events?.length ? (
				<DetailsLayout.Wrapper>
					<DetailsLayout.Title title="Transaction Action(s)" />
					<DetailsLayout.Data>
						<div className="space-y-3 divide-y">
							{events.map((e) => {
								const Component = mapped[e.name];
								if (Component) {
									return <Component data={e} />;
								}
							})}
						</div>
					</DetailsLayout.Data>
				</DetailsLayout.Wrapper>
			) : (
				<Fragment />
			)}
		</Fragment>
	);
}

const AssetsTransferred = ({ data }) => {
	const asset = getAssetMetadata(data?.args?.assetId);
	const formattedAmount = ethers.utils
		.formatUnits(data?.args?.amount, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">From</span>
			<Link href={`/account/${data?.args?.from}`}>
				<span className="text-indigo-500 cursor-pointer">
					{formatAddress(data?.args?.from)}
				</span>
			</Link>
			<span className="font-semibold">To</span>
			<Link href={`/account/${data?.args?.to}`}>
				<span className="text-indigo-500 cursor-pointer">{formatAddress(data?.args?.to)}</span>
			</Link>
			<span className="font-semibold">For</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
		</div>
	);
};
