import { ethers } from "ethers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

import {
	AccountTables,
	BalanceForAddress,
	ContainerLayout,
	PageHeader,
} from "@/components";

export const getServerSideProps = (context) => ({
	props: { walletAddress: context?.params?.walletaddress },
});

export default function Account({ walletAddress }) {
	if (!ethers.utils.isAddress(walletAddress)) {
		return "Invalid address";
	}

	return (
		<ContainerLayout>
			<PageHeader
				title={`Wallet # ${walletAddress}`}
				icon={
					<div className="my-auto h-5 pr-3">
						<Jazzicon diameter={20} seed={jsNumberForAddress(walletAddress)} />
					</div>
				}
			/>
			<BalanceForAddress walletAddress={walletAddress} />
			<AccountTables walletAddress={walletAddress} />
		</ContainerLayout>
	);
}
