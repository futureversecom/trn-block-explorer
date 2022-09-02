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

  console.log(query);

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
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                        from
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        to
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {query.data.map((block, key) => (
                      <tr key={key}>
                        <Link href={`/block/${block.height}`}>
                          <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
                            {formatAddress(block.extrinsicHash, 12)}
                          </td>
                        </Link>
                        <Link href={`/block/${block.blockNumber}`}>
                          <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
                            {block.blockNumber}
                          </td>
                        </Link>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <BlockFinalizedIcon status={true} />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <TimeAgo date={block.timestamp} />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {ethers.utils.formatEther(block.amount)} Root
                        </td>
                        <Link href={`/account/${block.from.id}`}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-indigo-500 cursor-pointer font-semibold">
                            {formatAddress(block?.from?.id) || "?"}
                          </td>
                        </Link>
                        <Link href={`/account/${block.to.id}`}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-indigo-500 cursor-pointer font-semibold">
                            {formatAddress(block?.to?.id) || "? "}
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
