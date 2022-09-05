import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "../utils/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import RefetchIndicator from "./refetchIndicator";
import { useGetBalanceQuery } from "../libs/api/generated.ts";
import { usePolling } from "../libs/hooks/usePolling";
import LoadingBlock from "./loadingBlock";
import { ethers } from "ethers";
import QRCode from "react-qr-code";
import CopyToClipBoard from "./copyToClipboard";

export default function BalanceForAddress({ walletAddress }) {
  const query = usePolling(
    {},
    useGetBalanceQuery,
    {
      address: walletAddress,
    },
    12000
  );

  const balance = query?.data?.balances?.accounts[0];

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex">
          <ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
          <h3 className="text-md font-medium leading-6 text-gray-900">
            Balance
          </h3>
        </div>
        <div>{query.isRefetching && <RefetchIndicator />}</div>
      </div>
      {query.isLoading ? (
        <LoadingBlock title="Balance" height="h-20" />
      ) : (
        <div className=" h- divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className=" px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="flex flex-row space-x-3 text-sm font-medium text-gray-900">
                      <div>
                        <QRCode
                          value={walletAddress}
                          size={64}
                          className="rounded-full"
                        />
                      </div>
                      <div className="my-auto text-lg">Unknown</div>
                    </div>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="flex flex-row space-x-3 text-sm font-medium text-gray-900">
                      <div>{walletAddress}</div>
                      <div className="my-auto">
                        <CopyToClipBoard value={walletAddress} />
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
            <div>
              <div className=" px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-900">
                      Total
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {ethers.utils.formatEther(balance?.total || "0")} Root
                    </div>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-900">
                      Reserved
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {ethers.utils.formatEther(balance?.reserved || "0")} Root
                    </div>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-900">
                      Free
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {ethers.utils.formatEther(balance?.free || "0")} Root
                    </div>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <div className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0"></div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
