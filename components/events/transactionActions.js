import { ethers } from "ethers";
import { Fragment } from "react";

import { DetailsLayout, TextLink } from "@/components";
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
			<TextLink link={`/address/${owner}`} text={formatAddress(owner)} />
		</div>
	);
};

const Erc20PegErc20Withdraw = ({ data }) => {
	const { args } = data;
	let assetId, amount, to;
	if (Array.isArray(args)) {
		[assetId, amount, to] = args;
	} else {
		({ assetId, amount, beneficiary: to } = args);
	}
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
			<TextLink link={`/address/${to}`} text={formatAddress(to)} />
		</div>
	);
};

const EthereumExecuted = ({ data }) => {
	let { from, to, transactionHash } = data?.args;
	return (
		<div className="flex flex-col">
			<div className="flex space-x-1">
				<span className="font-semibold">EVM Transaction From</span>
				<TextLink link={`/address/${from}`} text={formatAddress(from)} />
				<span className="font-semibold">To</span>
				<TextLink link={`/address/${to}`} text={formatAddress(to)} />
			</div>
			<div className="flex space-x-1">
				<span className="font-semibold">TxHash:</span>
				<TextLink
					link={`/tx/${transactionHash}`}
					text={formatAddress(transactionHash)}
				/>
			</div>
		</div>
	);
};

const AssetsIssued = ({ data }) => {
	const asset = getAssetMetadata(data?.args?.assetId);
	const assetIssued = data?.args?.totalSupply || data?.args?.amount;
	const formattedAmount = ethers.utils
		.formatUnits(assetIssued, asset?.decimals)
		.toString();
	return (
		<div className="flex space-x-1">
			<span className="font-semibold">Minted</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
			<span className="font-semibold">To</span>
			<TextLink
				link={`/address/${data?.args?.owner}`}
				text={formatAddress(data?.args?.owner)}
			/>
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
			<TextLink
				link={`/address/${data?.args?.from}`}
				text={formatAddress(data?.args?.from)}
			/>
			<span className="font-semibold">To</span>
			<TextLink
				link={`/address/${data?.args?.to}`}
				text={formatAddress(data?.args?.to)}
			/>
			<span className="font-semibold">For</span>
			<span>
				{formattedAmount} {asset?.symbol}
			</span>
		</div>
	);
};
