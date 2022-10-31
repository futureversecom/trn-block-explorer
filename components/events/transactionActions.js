import { ethers } from "ethers";
import Link from "next/link";
import { Fragment } from "react";

import { DetailsLayout } from "@/components";
import { formatAddress } from "@/libs/utils";
import { getAssetMetadata } from "@/libs/utils/getAssetMetadata";

export default function TransactionActions({ events, isSuccess }) {
	const mapped = {
		"Assets.Transferred": AssetsTransferred,
		"Assets.Issued": AssetsIssued,
	};

	const parsedEvents = Object.keys(mapped);
	const filteredEvents = events?.length
		? events.filter((e) => parsedEvents.includes(e.name))
		: [];

	return (
		<Fragment>
			{filteredEvents?.length && isSuccess ? (
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

const AssetsIssued = ({ data }) => {
	const asset = getAssetMetadata(data?.args?.assetId);
	const formattedAmount = ethers.utils
		.formatUnits(data?.args?.totalSupply, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">Minted</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
			<span className="font-semibold">To</span>
			<Link href={`/account/${data?.args?.owner}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(data?.args?.owner)}
				</span>
			</Link>
		</div>
	);
};

const AssetsTransferred = ({ data }) => {
	const asset = getAssetMetadata(data?.args?.assetId);
	const formattedAmount = ethers.utils
		.formatUnits(data?.args?.amount, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">From</span>
			<Link href={`/account/${data?.args?.from}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(data?.args?.from)}
				</span>
			</Link>
			<span className="font-semibold">To</span>
			<Link href={`/account/${data?.args?.to}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(data?.args?.to)}
				</span>
			</Link>
			<span className="font-semibold">For</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
		</div>
	);
};
