import { Fragment } from "react";

import { TextLink } from "@/components";
import ContractIcon from "@/components/evm/ContractIcon";
import EVMTooltip from "@/components/evm/evmTooltip";
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
			{isContract ? (
				<EVMTooltip message="Contract">
					<ContractIcon />
				</EVMTooltip>
			) : (
				<Fragment />
			)}

			<span className="flex space-x-2">
				<TextLink
					link={`/address/${address}`}
					text={format ? formatAddress(address) : address}
				/>
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
