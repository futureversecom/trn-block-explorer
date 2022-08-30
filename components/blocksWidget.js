import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BlocksWidget() {
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
      <div className=" bg-white px-4 py-5 sm:px-6 space-y-3 border border-gray-100 rounded-md">
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
    <div className="border-b-gray-100 block">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Block# {height}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">Includes</span> {extrinsics}
          <span className="text-gray-500">Events</span> {events}
        </div>
        <div>{timestamp}</div>
      </div>
    </div>
  );
};
