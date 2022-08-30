import Head from "next/head";
import Image from "next/image";
import { CubeIcon } from "@heroicons/react/24/outline";
import ContainerLayout from "../layout/containerLayout";
import PageHeader from "../components/pageHeader";

export default function Blocks() {
  return (
    <ContainerLayout>
      <PageHeader
        title={`Blocks`}
        icon={<CubeIcon className="h-5 my-auto pr-3" />}
      />
    </ContainerLayout>
  );
}
