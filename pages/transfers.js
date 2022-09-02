import { CubeIcon } from "@heroicons/react/24/outline";
import ContainerLayout from "../layout/containerLayout";
import PageHeader from "../components/pageHeader";
import Link from "next/link";
import LoadingBlock from "../components/loadingBlock";
import TimeAgo from "react-timeago";
import { formatAddress } from "../utils/utils";
import BlockFinalizedIcon from "../components/icons/blockFinalizedIcon";
import { useGetTransfersQuery } from "../libs/api/generated.ts";
import { usePolling } from "../libs/hooks/usePolling";
import { ethers } from "ethers";

export default function Transfers() {
  let query = usePolling({}, useGetTransfersQuery, {
    limit: 20,
  });

  query.data = query?.data?.transfers?.transfers;

  return (
    <ContainerLayout>
      <PageHeader
        title={`Transfers`}
        icon={<CubeIcon className="my-auto h-5 pr-3" />}
      />
      {query.isLoading ? (
        <LoadingBlock title={"transfers"} />
      ) : (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Hash
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Height
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
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        To
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {query.data.map((transfer, key) => (
                      <tr key={key}>
                        <Link href={`/transfer/${transfer.extrinsicHash}`}>
                          <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
                            {formatAddress(transfer.extrinsicHash, 12)}
                          </td>
                        </Link>
                        <Link href={`/transfer/${transfer.blockNumber}`}>
                          <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
                            {transfer.blockNumber}
                          </td>
                        </Link>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <BlockFinalizedIcon status={true} />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <TimeAgo date={transfer.timestamp} />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {ethers.utils.formatEther(transfer.amount)} Root
                        </td>
                        <Link href={`/account/${transfer.from.id}`}>
                          <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm font-semibold text-indigo-500">
                            {formatAddress(transfer?.from?.id) || "?"}
                          </td>
                        </Link>
                        <Link href={`/account/${transfer.to.id}`}>
                          <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm font-semibold text-indigo-500">
                            {formatAddress(transfer?.to?.id) || "? "}
                          </td>
                        </Link>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContainerLayout>
  );
}
