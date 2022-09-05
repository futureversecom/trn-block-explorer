import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "../utils/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import RefetchIndicator from "./refetchIndicator";
import { useGetEvmTransactionsForAddressQuery } from "../libs/api/generated.ts";
import { usePolling } from "../libs/hooks/usePolling";
import LoadingBlock from "./loadingBlock";

export default function EVMTransactionsForAddress({ walletAddress }) {
  const query = usePolling(
    {},
    useGetEvmTransactionsForAddressQuery,
    {
      address: walletAddress,
    },
    12000
  );

  query.data = query?.data?.evm?.transactions;

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex">
          <ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
          <h3 className="text-md font-medium leading-6 text-gray-900">
            EVM Transactions
          </h3>
        </div>
        <div>{query.isRefetching && <RefetchIndicator />}</div>
      </div>
      {query.isLoading ? (
        <LoadingBlock title="EVM Transactions" height="h-20" />
      ) : (
        <div className=" h- divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
          {query?.data?.length > 0 ? (
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
                    className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    Method
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
                {query.data.map((block, key) => (
                  <tr key={key}>
                    <Link href={`/block/${block.height}`}>
                      <td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
                        {block?.txHash ? formatAddress(block.txHash, 12) : "?"}
                      </td>
                    </Link>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {block?.block}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      <span
                        className={`rounded-md ${
                          block?.from.toLowerCase() ===
                          walletAddress.toLowerCase()
                            ? "bg-green-800"
                            : "bg-red-600"
                        } p-2 text-gray-50`}
                      >
                        {block?.from.toLowerCase() ==
                        walletAddress.toLowerCase()
                          ? "Out"
                          : "In"}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <TimeAgo date={block.timestamp} />
                    </td>
                    <td className="mx-auto whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                      <span className="rounded-md bg-slate-700 p-2 text-gray-50">
                        {block?.input?.method || "?"}
                      </span>
                    </td>
                    <Link href={`/account/${block.from}`}>
                      <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-indigo-500">
                        {block?.from ? formatAddress(block.from) : "? "}
                      </td>
                    </Link>
                    <Link href={`/account/${block.to}`}>
                      <td className="cursor-pointer whitespace-nowrap px-3 py-4 text-sm text-indigo-500">
                        {block?.to ? formatAddress(block.to) : "? "}
                      </td>
                    </Link>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="space-x-3 text-center">😥 No EVM Transactions</div>
          )}
        </div>
      )}
    </div>
  );
}
