import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "../utils/utils";
import * as clientApi from "../utils/client";

export default function BlocksWidget() {
  const query = useQuery(
    ["blocksFrontpage"],
    async () => {
      console.log("Fething blocksFrontpage");
      await sleep(1500);
      return clientApi.getLatestBlocks();
    },
    {
      refetchInterval: 15000,
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
          <BlockItem
            key={key}
            height={5000}
            extrinsics={25}
            events={30}
            timestamp={34000}
          />
        ))}
      </div>
    </div>
  );
}

const BlockItem = ({ height, extrinsics, events, timestamp }) => {
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
        <div>{timestamp}</div>
      </div>
    </div>
  );
};
