import { utils as ethers } from "ethers";
import { useMemo } from "react";

import {
	AccountTables,
	BalanceForAddress,
	ContainerLayout,
	PageHead,
} from "@/components";
import { ContractProvider } from "@/libs/providers";

export const getServerSideProps = (context) => ({
	props: { walletAddress: context?.params?.walletaddress },
});

export default function Account({ walletAddress }) {
	const isAddress = useMemo(
		() => ethers.isAddress(walletAddress),
		[walletAddress]
	);

	if (!isAddress) {
		return "Invalid address";
	}

	return (
		<ContractProvider address={walletAddress}>
			<ContainerLayout>
				<PageHead title={`Wallet #${walletAddress}`} />
				<div className="space-y-3">
					<BalanceForAddress walletAddress={walletAddress} />
					<AccountTables walletAddress={walletAddress} />
				</div>
			</ContainerLayout>
		</ContractProvider>
	);
}
