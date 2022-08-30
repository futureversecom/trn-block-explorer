import { useRouter } from "next/router";

export default function Block() {
  const router = useRouter();
  const { blocknumber } = router.query;

  return <h1>Block {blocknumber}</h1>;
}
