import { useRouter } from "next/router";
import { CubeIcon } from "@heroicons/react/24/outline";
import ContainerLayout from "../../layout/containerLayout";
import PageHeader from "../../components/pageHeader";

export default function Account() {
  const router = useRouter();
  const { walletaddress } = router.query;

  return (
    <ContainerLayout>
      <PageHeader
        title={`Wallet # ${walletaddress}`}
        icon={<CubeIcon className="h-5 my-auto pr-3" />}
      />
    </ContainerLayout>
  );
}
