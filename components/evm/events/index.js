import {
	ArrowsRightLeftIcon,
	ChevronRightIcon,
	ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import { Fragment } from "react";

import { TextLink } from "@/components";
import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import { formatAddress } from "@/libs/utils";

// ERC721
// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
const Transfer = ({ log }) => {
	return (
		<div className="flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ArrowsRightLeftIcon className="mr-2 h-5 w-5" /> Transfer{" "}
			</div>
			<span className="font-semibold">From</span>
			<TextLink
				link={`/address/${log?.args?.to}`}
				text={formatAddress(log?.args?.from)}
			/>
			<span className="font-semibold">To</span>
			<TextLink
				link={`/address/${log?.args?.to}`}
				text={formatAddress(log?.args?.to)}
			/>
			<span className="font-semibold">TokenId</span>
			<span>{log?.args?.tokenId}</span>
			<span>
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
			<DisplayNFTImage
				args={log?.args}
				uri={log?.contractData?.uri}
				height={50}
				width={50}
			/>
		</div>
	);
};
// event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
const ApprovalForAll = ({ log }) => {
	return (
		<div className="group flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="font-semibold">Owner</span>
			<TextLink
				link={`/address/${log?.args?.owner || log?.args?.account}`}
				text={formatAddress(log?.args?.owner || log?.args?.account)}
			/>
			<span className="font-semibold">Operator</span>
			<TextLink
				link={`/address/${log?.args?.operator}`}
				text={formatAddress(log?.args?.operator)}
			/>
			<span className="font-semibold">Approved</span>
			<span>{log?.args?.approved ? "Yes" : "No"}</span>
			<span className="truncate group-hover:overflow-visible">
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
			<div className="flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
				<div className="flex">
					<ArrowsRightLeftIcon className="mr-2 h-5 w-5" /> TransferBatch{" "}
				</div>
				<TextLink
					link={`/address/${log?.args?.from}`}
					text={formatAddress(log?.args?.from)}
				/>
				<span className="font-semibold">To</span>
				<TextLink
					link={`/address/${log?.args?.to}`}
					text={formatAddress(log?.args?.to)}
				/>
				<span>
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
			{log?.args?.ids?.map((tokenId, key) => (
				<div className="flex space-x-2" key={key}>
					<ChevronRightIcon className="h-4 w-4" />
					<div className="flex-grow space-x-2">
						<span className="font-semibold">TokenId</span>
						<span>{tokenId}</span>
						<span className="font-semibold">Quantity</span>
						<span>{log?.args?.[4]?.[key]}</span>
					</div>
					<DisplayNFTImage
						args={{ tokenId }}
						uri={log?.contractData?.uri}
						height={50}
						width={50}
					/>
				</div>
			))}
		</Fragment>
	);
};

// event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
const TransferSingle = ({ log }) => {
	return (
		<div className="flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ArrowsRightLeftIcon className="mr-2 h-5 w-5" /> Transfer{" "}
			</div>
			<span className="font-semibold">From</span>
			<TextLink
				link={`/address/${log?.args?.from}`}
				text={formatAddress(log?.args?.from)}
			/>
			<span className="font-semibold">To</span>
			<TextLink
				link={`/address/${log?.args?.to}`}
				text={formatAddress(log?.args?.to)}
			/>
			<span className="font-semibold">TokenId</span>
			<span>{log?.args?.id}</span>
			<span className="font-semibold">Qty</span>
			<span>{log?.args?.value}</span>
			<span>
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
			<DisplayNFTImage
				args={{ tokenId: log?.args?.id }}
				uri={log?.contractData?.uri}
				height={50}
				width={50}
			/>
		</div>
	);
};

// event Transfer(address indexed from, address indexed to, uint256 value);
const ERC20Transfer = ({ log }) => {
	return (
		<div className="group flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ArrowsRightLeftIcon className="mr-2 h-5 w-5" /> Transfer{" "}
			</div>
			<span className="font-semibold">From</span>
			<TextLink
				link={`/address/${log?.args?.from}`}
				text={formatAddress(log?.args?.from)}
			/>
			<span className="font-semibold">To</span>
			<TextLink
				link={`/address/${log?.args?.to}`}
				text={formatAddress(log?.args?.to)}
			/>
			<span>
				{ethers.utils
					.formatUnits(log?.args?.value, log?.contractData?.decimals)
					.toString()}
			</span>
			<span className="truncate group-hover:overflow-visible">
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
		</div>
	);
};

// event Approval(address indexed owner, address indexed spender, uint256 value);
const ERC20Approval = ({ log }) => {
	return (
		<div className="group flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="font-semibold">Owner</span>
			<TextLink
				link={`/address/${log?.args?.owner}`}
				text={formatAddress(log?.args?.owner)}
			/>
			<span className="font-semibold">Spender</span>
			<TextLink
				link={`/address/${log?.args?.spender}`}
				text={formatAddress(log?.args?.spender)}
			/>
			<span>
				{ethers.utils
					.formatUnits(log?.args?.value, log?.contractData?.decimals)
					.toString()}
			</span>
			<span className="truncate group-hover:overflow-visible">
				{log?.contractData?.name} ({log?.contractData?.symbol})
			</span>
		</div>
	);
};

// event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
const ERC721Approval = ({ log }) => {
	return (
		<div className="group flex items-center space-x-2 overflow-x-scroll whitespace-nowrap capitalize">
			<div className="flex">
				<ShieldExclamationIcon className="mr-2 h-5 w-5" /> Approval{" "}
			</div>
			<span className="font-semibold">Owner</span>
			<TextLink
				link={`/address/${log?.args?.owner}`}
				text={formatAddress(log?.args?.owner)}
			/>
			<span className="whitespace-nowrap font-semibold">Approved Spender</span>
			<TextLink
				link={`/address/${log?.args?.approved}`}
				text={formatAddress(log?.args?.approved)}
			/>
			<span className="font-semibold">TokenId</span>
			<span className="truncate group-hover:overflow-visible">
				{log?.args?.tokenId} {log?.contractData?.name} (
				{log?.contractData?.symbol})
			</span>
		</div>
	);
};

const EventComponents = {
	Transfer,
	ApprovalForAll,
	TransferBatch,
	TransferSingle,
	ERC20Approval,
	ERC20Transfer,
	ERC721Approval,
};

export default EventComponents;
