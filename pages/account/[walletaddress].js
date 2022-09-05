import { useRouter } from "next/router";
import { CubeIcon } from "@heroicons/react/24/outline";
import ContainerLayout from "../../layout/containerLayout";
import PageHeader from "../../components/pageHeader";
import EVMTransactionsForAddress from "../../components/evmTransactionsForAddressTable";
import BalanceForAddress from "../../components/balanceForAddress";
export default function Account() {
  const router = useRouter();
  const { walletaddress } = router.query;

  return (
    <ContainerLayout>
      <PageHeader
        title={`Wallet # ${walletaddress}`}
        icon={<CubeIcon className="my-auto h-5 pr-3" />}
      />
      <BalanceForAddress walletAddress={walletaddress} />
      <EVMTransactionsForAddress walletAddress={walletaddress} />
    </ContainerLayout>
  );
}
