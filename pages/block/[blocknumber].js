import { useRouter } from "next/router";
import ContainerLayout from "../../layout/containerLayout";

export default function Block() {
  const router = useRouter();
  const { blocknumber } = router.query;

  return <ContainerLayout>ello</ContainerLayout>;
}
