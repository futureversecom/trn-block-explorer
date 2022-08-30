import {
  CubeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../utils/utils";
import * as clientApi from "../utils/client";
import TimeAgo from "react-timeago";
import RefetchIndicator from "./refetchIndicator";
import ReactTooltip from "react-tooltip";
import BlockFinalizedIcon from "./icons/blockFinalizedIcon";

export default function BlocksWidget() {
  const query = useQuery(
    ["blocksFrontpage"],
    async () => {
      console.log("Fething blocksFrontpage");
      await sleep(1500);
      return clientApi.getLatestBlocks();
    },
    {
      refetchInterval: 5000,
    }
  );

  if (query.isLoading) return "Loading blocks..";

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex">
          <CubeIcon className="h-5 my-auto pr-3" />
          <h3 className="text-md font-medium leading-6 text-gray-900">
            Blocks
          </h3>
        </div>
        <div>
          {query.isRefetching && <RefetchIndicator />}
          <Link href={"/blocks"}>
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
        {query.data.map((item, key) => (
          <BlockItem
            key={key}
            height={item.height}
            extrinsics={25}
            events={30}
            timestamp={item.timestamp}
            status={true}
          />
        ))}
      </div>
    </div>
  );
}

const BlockItem = ({ height, extrinsics, events, timestamp, status }) => {
  return (
    <div className="block py-3">
      <div className="flex flex-row justify-between">
        <div className="text-sm font-bold">
          Block# <span className="text-lg">{height}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-teal-800">
          <span className="text-gray-500 text-sm">Includes</span>{" "}
          <span>{extrinsics} Extrinsics</span> <span>{events} Events</span>{" "}
        </div>
        <div className="flex space-x-3">
          <div className="text-sm">
            <TimeAgo date={timestamp} />
          </div>
          <div>
            {status == true ? (
             <BlockFinalizedIcon/>
            ) : (
              <ExclamationCircleIcon
                data-tip
                data-for="unfinalizedIcon"
                className="h-5 my-auto text-red-700"
              />
            )}
          </div>
        </div>
      </div>
    
      <ReactTooltip id="unfinalizedIcon" aria-haspopup="true" type="warning">
        <span>Unfinalized</span>
      </ReactTooltip>
    </div>
  );
};
