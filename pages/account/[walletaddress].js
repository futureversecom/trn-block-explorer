import { useRouter } from "next/router";
import {
	PageHeader,
	BalanceForAddress,
	EVMTransactionsForAddress,
	ContainerLayout,
} from "@/components";
import { ethers } from "ethers";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export default function Account() {
	const router = useRouter();
	const { walletaddress } = router.query;

	if (!ethers.utils.isAddress(walletaddress)) {
		return "Invalid address";
	}

	return (
		<ContainerLayout>
			<PageHeader
				title={`Wallet # ${walletaddress}`}
				icon={
					<div className="my-auto h-5 pr-3">
						<Jazzicon diameter={20} seed={jsNumberForAddress(walletaddress)} />
					</div>
				}
			/>
			<BalanceForAddress walletAddress={walletaddress} />
			<EVMTransactionsForAddress walletAddress={walletaddress} />
		</ContainerLayout>
	);
}
