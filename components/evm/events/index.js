import {
	ChevronRightIcon,
	ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import Link from "next/link";
import { Fragment } from "react";

import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import { formatAddress } from "@/libs/utils";

// ERC721
// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
const Transfer = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="my-auto flex-grow space-x-2">
				<span className="my-auto font-semibold capitalize">Transfer</span>
				<span className="my-auto font-semibold capitalize">From</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.to}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semibold capitalize">To</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.to}`}>
						{formatAddress(log?.args?.to)}
					</Link>
				</span>
				<span className="my-auto font-semibold capitalize">TokenId</span>
				<span className="my-auto capitalize">{log?.args?.tokenId}</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
			<div className="flex-shrink">
				<DisplayNFTImage
					args={log?.args}
					uri={log?.contractData?.uri}
					height={50}
					width={50}
				/>
			</div>
		</div>
	);
};
// event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
const ApprovalForAll = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="my-auto font-semibold capitalize">Owner</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.owner || log?.args?.account}`}>
					{formatAddress(log?.args?.owner || log?.args?.account)}
				</Link>
			</span>
			<span className="my-auto font-semibold capitalize">Operator</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.operator}`}>
					{formatAddress(log?.args?.operator)}
				</Link>
			</span>
			<span className="my-auto font-semibold capitalize">Approved</span>
			<span className="my-auto capitalize">
				{log?.args?.approved ? "Yes" : "No"}
			</span>
			<span className="my-auto capitalize">
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
		</div>
	);
};

// event TransferBatch(
//   address indexed operator,
//   address indexed from,
//   address indexed to,
//   uint256[] ids,
//   uint256[] values
// );

const TransferBatch = ({ log }) => {
	return (
		<Fragment>
			<div className="flex space-x-2">
				<div className="my-auto flex-grow space-x-2">
					<span className="my-auto font-semibold capitalize">
						TransferBatch
					</span>
					<span className="my-auto font-semibold capitalize">From</span>
					<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
						<Link href={`/address/${log?.args?.from}`}>
							{formatAddress(log?.args?.from)}
						</Link>
					</span>
					<span className="my-auto font-semibold capitalize">To</span>
					<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
						<Link href={`/address/${log?.args?.to}`}>
							{formatAddress(log?.args?.to)}
						</Link>
					</span>
					<span className="my-auto capitalize">
						{log?.contractData?.name} ({log?.contractData?.symbol})
					</span>
				</div>
			</div>
			{log?.args?.ids?.map((tokenId, key) => (
				<div className="my-auto flex space-x-2" key={key}>
					<ChevronRightIcon className="my-auto h-4 w-4" />
					<div className="my-auto flex-grow space-x-2">
						<span className="my-auto font-semibold capitalize">TokenId</span>
						<span className="my-auto capitalize">{tokenId}</span>
						<span className="my-auto font-semibold capitalize">Quantity</span>
						<span className="my-auto capitalize">{log?.args?.[4]?.[key]}</span>
					</div>
					<div className="flex-shrink">
						<DisplayNFTImage
							args={{ tokenId }}
							uri={log?.contractData?.uri}
							height={50}
							width={50}
						/>
					</div>
				</div>
			))}
		</Fragment>
	);
};

// event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
const TransferSingle = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="my-auto flex-grow space-x-2">
				<span className="my-auto font-semibold capitalize">Transfer</span>
				<span className="my-auto font-semibold capitalize">From</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.from}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semibold capitalize">To</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.to}`}>
						{formatAddress(log?.args?.to)}
					</Link>
				</span>
				<span className="my-auto font-semibold capitalize">TokenId</span>
				<span className="my-auto capitalize">{log?.args?.id}</span>
				<span className="my-auto font-semibold capitalize">Qty</span>
				<span className="my-auto capitalize">{log?.args?.value}</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
			<div className="flex-shrink">
				<DisplayNFTImage
					args={{ tokenId: log?.args?.id }}
					uri={log?.contractData?.uri}
					height={50}
					width={50}
				/>
			</div>
		</div>
	);
};

// event Transfer(address indexed from, address indexed to, uint256 value);
const ERC20Transfer = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="my-auto flex-grow space-x-2">
				<span className="my-auto font-semibold capitalize">Transfer</span>
				<span className="my-auto font-semibold capitalize">From</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.from}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semibold capitalize">To</span>
				<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
					<Link href={`/address/${log?.args?.to}`}>
						{formatAddress(log?.args?.to)}
					</Link>
				</span>
				<span className="my-auto capitalize">
					{ethers.utils
						.formatUnits(log?.args?.value, log?.contractData?.decimals)
						.toString()}
				</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
		</div>
	);
};

// event Approval(address indexed owner, address indexed spender, uint256 value);
const ERC20Approval = ({ log }) => {
	return (
		<div className="my-auto flex space-x-2">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="my-auto font-semibold capitalize">Owner</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.owner}`}>
					{formatAddress(log?.args?.owner)}
				</Link>
			</span>
			<span className="my-auto font-semibold capitalize">Spender</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.spender}`}>
					{formatAddress(log?.args?.spender)}
				</Link>
			</span>
			<span className="my-auto capitalize">
				{ethers.utils
					.formatUnits(log?.args?.value, log?.contractData?.decimals)
					.toString()}
			</span>
			<span className="my-auto capitalize">
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
		</div>
	);
};

// event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
const ERC721Approval = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="my-auto font-semibold capitalize">Owner</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.owner}`}>
					{formatAddress(log?.args?.owner)}
				</Link>
			</span>
			<span className="my-auto font-semibold capitalize">Approved Spender</span>
			<span className="my-auto cursor-pointer text-indigo-500 hover:text-white">
				<Link href={`/address/${log?.args?.approved}`}>
					{formatAddress(log?.args?.approved)}
				</Link>
			</span>
			<span className="my-auto font-semibold capitalize">TokenId</span>
			<span className="my-auto capitalize">{log?.args?.tokenId}</span>
			<span className="my-auto capitalize">
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
		</div>
	);
};

const EvmEvents = {
	Transfer,
	ApprovalForAll,
	TransferBatch,
	TransferSingle,
	ERC20Transfer,
	ERC20Approval,
	ERC721Approval,
};

export default EvmEvents;
