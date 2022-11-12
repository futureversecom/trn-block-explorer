import { ethers } from "ethers";

import {
	AccountTables,
	BalanceForAddress,
	ContainerLayout,
	PageHead,
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
			<PageHead title={`Wallet #${walletAddress}`} />
			<div className="space-y-3">
				<BalanceForAddress walletAddress={walletAddress} />
				<AccountTables walletAddress={walletAddress} />
			</div>
		</ContainerLayout>
	);
}
