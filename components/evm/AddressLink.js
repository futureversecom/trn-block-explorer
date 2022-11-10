import Link from "next/link";
import { Fragment } from "react";

import ContractIcon from "@/components/evm/ContractIcon";
import { CopyToClipboard } from "@/components/icons";
import { formatAddress } from "@/libs/utils";

export default function AddressLink({
	address,
	contractData,
	format,
	showNameAndSymbol,
	hideCopyButton,
}) {
	const isContract = contractData?.address;
	return (
		<Fragment>
			{isContract ? <ContractIcon /> : <Fragment />}

			<span className="flex space-x-2">
				<Link href={`/account/${address}`}>
					<span className="cursor-pointer text-indigo-500 hover:text-white">
						{format ? formatAddress(address) : address}
					</span>
				</Link>
				{showNameAndSymbol && (
					<span>
						{contractData?.name}{" "}
						{contractData?.symbol && (
							<Fragment>({contractData?.symbol})</Fragment>
						)}
					</span>
				)}
			</span>

			{!hideCopyButton && <CopyToClipboard value={address} />}
		</Fragment>
	);
}
