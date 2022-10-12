import Link from "next/link";

import { BURN_ADDRESSES } from "@/libs/constants";
import { formatAddress } from "@/libs/utils";

import Tooltip from "./tooltip";

export const AddressLink = ({ isAccount, address }) => {
	if (isAccount) return <span>{formatAddress(address)}</span>;

	const isBurn = BURN_ADDRESSES.includes(address.toLowerCase());
	return (
		<Link href={`/account/${address}`}>
			<div className="flex gap-2 cursor-pointer">
				{formatAddress(address)}{" "}
				{isBurn && <Tooltip message={"Known burn address"}>🔥</Tooltip>}
			</div>
		</Link>
	);
};
