import Link from "next/link";

import { BURN_ADDRESSES } from "@/libs/constants";
import { formatAddress } from "@/libs/utils";

import Tooltip from "./tooltip";

export const AddressLink = ({ isAccount, address }) => {
	if (!address) address = "0x0000000000000000000000000000000000000000";

	if (isAccount) return <span>{formatAddress(address)}</span>;

	const isBurn = BURN_ADDRESSES.includes(address.toLowerCase());
	return (
		<Link href={`/address/${address}`}>
			<div className="flex cursor-pointer gap-2 text-indigo-500 hover:text-white">
				{formatAddress(address)}{" "}
				{isBurn && <Tooltip message={"Known burn address"}>🔥</Tooltip>}
			</div>
		</Link>
	);
};
