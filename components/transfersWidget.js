import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "../utils/utils";
import Link from "next/link";

export default function TransfersWidget() {
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
      <div className=" bg-white px-4 py-5 sm:px-6 space-y-3 border border-gray-100 rounded-md">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
          <TransferItem
            key={key}
            from={"0xbE4c83Bf1dF0748804B2A92c5Bb81Ab6cCc0B94F"}
            to={"0xF3918988Eb3Ce66527E2a1a4D42C303915cE28CE"}
            id={`1762842-${item}`}
            timestamp={"123"}
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
    <div className="block">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Extrinsic# {id}</div>
        <div>{amount} ROOT</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <span className="text-gray-500">From</span> {formatAddress(from)}{" "}
          <span className="text-gray-500">to</span> {formatAddress(to)}
        </div>
        <div>{timestamp}</div>
      </div>
    </div>
  );
};
