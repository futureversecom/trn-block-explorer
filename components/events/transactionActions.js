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
		"Ethereum.Executed": EthereumExecuted,
		"Erc20Peg.Erc20Withdraw": Erc20PegErc20Withdraw,
		"Assets.Burned": AssetsBurned,
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
						<div className="grid grid-cols-1 gap-2">
							{events.map((e, key) => {
								const Component = mapped[e.name];
								if (Component) {
									return <Component data={e} key={key} />;
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

const AssetsBurned = ({ data }) => {
	let { owner, assetId, balance } = data?.args;
	const asset = getAssetMetadata(assetId);
	const formattedAmount = ethers.utils
		.formatUnits(balance, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">Internal Burn</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
			<span className="font-semibold">From</span>
			<Link href={`/account/${owner}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(owner)}
				</span>
			</Link>
		</div>
	);
};

const Erc20PegErc20Withdraw = ({ data }) => {
	let [assetId, amount, to] = data?.args;
	const asset = getAssetMetadata(assetId);
	const formattedAmount = ethers.utils
		.formatUnits(amount, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">ERC20Peg Withdraw</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
			<span className="font-semibold">To</span>
			<Link href={`/account/${to}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(to)}
				</span>
			</Link>
		</div>
	);
};

const EthereumExecuted = ({ data }) => {
	let { from, to, transactionHash } = data?.args;
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">EVM Transaction From</span>
			<Link href={`/account/${from}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(from)}
				</span>
			</Link>
			<span className="font-semibold">To</span>
			<Link href={`/account/${to}`}>
				<span className="cursor-pointer text-indigo-500">
					{formatAddress(to)}
				</span>
			</Link>
			<span className="font-semibold">TxHash:</span>
			<span>{formatAddress(transactionHash)}</span>
		</div>
	);
};

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
