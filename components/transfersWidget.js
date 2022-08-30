import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress, sleep } from "../utils/utils";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import * as clientApi from "../utils/client";
import TimeAgo from "react-timeago";
import RefetchIndicator from "./refetchIndicator";

export default function TransfersWidget() {
  const query = useQuery(
    ["transferFrontpage"],
    async () => {
      console.log("Fething transferFrontpage");
      await sleep(1500);
      return clientApi.getLatestTransfers();
    },
    {
      refetchInterval: 5000,
    }
  );

  if (query.isLoading) return "Loading transfers..";

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex">
          <ArrowsRightLeftIcon className="h-5 my-auto pr-3" />
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
      <div className=" bg-white px-4 py-3 sm:px-6 border border-gray-100 rounded-md shadow-md divide-y">
        {query?.data?.map((item, key) => (
          <TransferItem
            key={key}
            from={"0xbE4c83Bf1dF0748804B2A92c5Bb81Ab6cCc0B94F"}
            to={"0xF3918988Eb3Ce66527E2a1a4D42C303915cE28CE"}
            id={item.id}
            timestamp={item.timestamp}
            amount={"1234"}
            status={true}
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
        <div>{amount} ROOT</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">From</span> {formatAddress(from)}{" "}
          <span className="text-gray-500">to</span> {formatAddress(to)}
        </div>
        <div className="text-sm">
          <TimeAgo date={timestamp} />
        </div>
      </div>
    </div>
  );
};