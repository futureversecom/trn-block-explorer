import Link from "next/link";
import { formatAddress } from "@/libs/utils";

export const AddressLink = ({ isAccount, address }) => {
	if (isAccount) return <span>{formatAddress(address)}</span>;

	return <Link href={`/account/${address}`}>{formatAddress(address)}</Link>;
};
