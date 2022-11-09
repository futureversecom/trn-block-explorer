import Link from "next/link";
import { Fragment } from "react";

import ContractIcon from "@/components/evm/ContractIcon";
import { CopyToClipboard } from "@/components/icons";
import { formatAddress } from "@/libs/utils";

export default function AddressLink({ address, contractData, format }) {
	return (
		<Fragment>
			{contractData && <ContractIcon />}
			<Link href={`/account/${address}`}>
				<span className="cursor-pointer text-indigo-500 hover:text-white">
					{format ? formatAddress(address) : address}
				</span>
			</Link>
			<CopyToClipboard value={address} />
		</Fragment>
	);
}
