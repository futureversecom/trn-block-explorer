import { useRouter } from "next/router";

export default function Account() {
  const router = useRouter();
  const { walletaddress } = router.query;

  return <h1>Walletaddress {walletaddress}</h1>;
}
