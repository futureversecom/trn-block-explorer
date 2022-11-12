import Link from "next/link";
import { Fragment } from "react";

import { Tooltip } from "@/components";
import DisplayNFTImage from "@/components/evm/DisplayNFTImage";
import { formatAddress } from "@/libs/utils";

// // ERC165 + ERC721

// event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
// event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

// // ERC165 + ERC1155

// event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
// event TransferBatch(
//   address indexed operator,
//   address indexed from,
//   address indexed to,
//   uint256[] ids,
//   uint256[] values
// );
// event ApprovalForAll(address indexed account, address indexed operator, bool approved);

// // ERC20
// event Transfer(address indexed from, address indexed to, uint256 value);
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

export default {
	Transfer: Transfer,
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
