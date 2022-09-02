import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "../utils/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import BlockFinalizedIcon from "./icons/blockFinalizedIcon";
import { getCurrentNativeCurrencyName } from "../utils/networkSwitcherUtils";
import { ethers } from "ethers";
import RefetchIndicator from "./refetchIndicator";
import { useGetLatestTenTransfersQuery } from "../libs/api/generated.ts";
import { usePolling } from "../libs/hooks/usePolling";

export default function TransfersWidget() {
  const query = usePolling({}, useGetLatestTenTransfersQuery);
  const transfers = query?.data?.transfers?.transfers;

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex">
          <ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
          <h3 className="text-md font-medium leading-6 text-gray-900">
            Transfers
          </h3>
        </div>
        <div>
          {query.isRefetching && <RefetchIndicator />}

          <Link href={"/transfers"}>
            <button
              type="button"
              className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              view all
            </button>
          </Link>
        </div>
      </div>

      <div className=" divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
        {transfers?.map((item, key) => (
          <TransferItem
            key={key}
            from={item?.from?.id}
            to={item?.to?.id}
            id={formatAddress(item.extrinsicHash)}
            timestamp={item.timestamp}
            amount={item.amount}
            status={item.status === "TRANSFERRED" ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

const TransferItem = ({ from, to, id, timestamp, amount, status }) => {
  return (
    <div className="block py-3">
      <div className="flex flex-row justify-between">
        <div className="text-sm font-bold">
          Extrinsic# <span className="text-lg">{id}</span>
        </div>
        <div className="my-auto flex">
          {ethers.utils.formatEther(amount.toString()).toString()}{" "}
          {getCurrentNativeCurrencyName()}{" "}
          <BlockFinalizedIcon status={status} />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">From</span>{" "}
          <Link href={`/account/${from}`}>
            <span className="cursor-pointer text-indigo-500">
              {formatAddress(from)}
            </span>
          </Link>{" "}
          <span className="text-gray-500">to</span>{" "}
          <Link href={`/account/${to}`}>
            <span className="cursor-pointer text-indigo-500">
              {formatAddress(to)}
            </span>
          </Link>
        </div>
        <div className="text-sm text-gray-600">
          <TimeAgo date={timestamp} />
        </div>
      </div>
    </div>
  );
};
