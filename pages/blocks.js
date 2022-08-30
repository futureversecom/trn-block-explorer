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

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-100 rounded-md shadow-md ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Block
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Extrinsics
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Events
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Collator
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Block hash
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Block hash
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      123
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}
