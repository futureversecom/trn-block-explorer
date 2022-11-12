import { ethers } from "ethers";
import Link from "next/link";
import { Fragment } from "react";

import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import { formatAddress } from "@/libs/utils";

// ERC165 + ERC721

// event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

// ERC20
// event Approval(address indexed owner, address indexed spender, uint256 value);

// ERC721
// event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
const Transfer = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="space-x-2 my-auto flex-grow">
				<span className="my-auto font-semi capitalize">From</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.to}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">To</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.to}`}>
						{formatAddress(log?.args?.to)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">TokenId</span>
				<span className="my-auto capitalize">{log?.args?.tokenId}</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
			<div className="flex-shrink">
				{log?.contractData?.uri && (
					<DisplayNFTImage
						args={log?.args}
						uri={log?.contractData?.uri}
						height={100}
						width={100}
					/>
				)}
			</div>
		</div>
	);
};
// event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
const ApprovalForAll = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="space-x-2 my-auto flex-grow">
				<span className="my-auto font-semi capitalize">Owner</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.owner || log?.args?.account}`}>
						{formatAddress(log?.args?.owner || log?.args?.account)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">Operator</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.operator}`}>
						{formatAddress(log?.args?.operator)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">Approved</span>
				<span className="my-auto capitalize">
					{log?.args?.approved ? "Yes" : "No"}
				</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
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
				<div className="space-x-2 my-auto flex-grow">
					<span className="my-auto font-semi capitalize">From</span>
					<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
						<Link href={`/account/${log?.args?.from}`}>
							{formatAddress(log?.args?.from)}
						</Link>
					</span>
					<span className="my-auto font-semi capitalize">To</span>
					<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
						<Link href={`/account/${log?.args?.to}`}>
							{formatAddress(log?.args?.to)}
						</Link>
					</span>
					<span className="my-auto capitalize">
						{log?.contractData?.name} ({log?.contractData?.symbol})
					</span>
				</div>
			</div>
			{log?.args?.ids?.map((tokenId, key) => (
				<div className="flex space-x-2 my-auto" key={key}>
					<div className="flex-grow my-auto space-x-2">
						<span className="my-auto font-semibold capitalize">TokenId</span>
						<span className="my-auto capitalize">{tokenId}</span>
						<span className="my-auto font-semibold capitalize">Quantity</span>
						<span className="my-auto capitalize">{log?.args?.[4]?.[key]}</span>
					</div>
					<div className="flex-shrink">
						{log?.contractData?.uri && (
							<DisplayNFTImage
								args={{ tokenId }}
								uri={log?.contractData?.uri}
								height={25}
								width={25}
							/>
						)}
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
			<div className="space-x-2 my-auto flex-grow">
				<span className="my-auto font-semi capitalize">From</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.from}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">To</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.to}`}>
						{formatAddress(log?.args?.to)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">TokenId</span>
				<span className="my-auto capitalize">{log?.args?.id}</span>
				<span className="my-auto font-semi capitalize">Qty</span>
				<span className="my-auto capitalize">{log?.args?.value}</span>
				<span className="my-auto capitalize">
					{log?.contractData?.name} ({log?.contractData?.symbol})
				</span>
			</div>
			<div className="flex-shrink">
				{log?.contractData?.uri && (
					<DisplayNFTImage
						args={{ tokenId: log?.args?.id }}
						uri={log?.contractData?.uri}
						height={100}
						width={100}
					/>
				)}
			</div>
		</div>
	);
};

// event Transfer(address indexed from, address indexed to, uint256 value);
const ERC20Transfer = ({ log }) => {
	return (
		<div className="flex space-x-2">
			<div className="space-x-2 my-auto flex-grow">
				<span className="my-auto font-semi capitalize">From</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.from}`}>
						{formatAddress(log?.args?.from)}
					</Link>
				</span>
				<span className="my-auto font-semi capitalize">To</span>
				<span className="my-auto text-indigo-500 hover:text-white cursor-pointer">
					<Link href={`/account/${log?.args?.to}`}>
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
export default {
	Transfer: Transfer,
	ApprovalForAll: ApprovalForAll,
	TransferBatch: TransferBatch,
	TransferSingle: TransferSingle,
	ERC20Transfer: ERC20Transfer,
};

{
	/* <div className="flex space-x-2">
												<span className="capitalize my-auto">
													{log?.parsedFromAbi}
												</span>
												<span className="my-auto">{log.name}</span>
												{Object.keys(args)?.map((key) => {
													let value = args[key];
													if (key == "amount" || key == "value") {
														value = ethers.utils
															.formatUnits(value, log?.contractData?.decimals)
															.toString();
													}
													if(isBoolean(value)){
														value = value.toString()
													}
													return (
														<Fragment>
															<span className="my-auto font-semi capitalize">
																{key}
															</span>
															<span className="my-auto capitalize">
																{value}
															</span>
														</Fragment>
													);
												})}
												<span className="my-auto capitalize">
													{log?.contractData?.name} ({log?.contractData?.symbol}
													)
												</span>
												{log?.contractData?.uri && (
													<DisplayNFTImage
														args={log?.args}
														uri={log?.contractData?.uri}
													/>
												)}
											</div> */
}
