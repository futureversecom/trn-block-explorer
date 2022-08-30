import { ChartPieIcon } from "@heroicons/react/24/outline";
import { sleep } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import * as clientApi from "../utils/client";
import CountUp from "react-countup";
import RefetchIndicator from "./refetchIndicator";

export default function ChaindataWidget() {
  const query = useQuery(
    ["chaindataFrontpage"],
    async () => {
      console.log("Fething chaindataFrontpage");
      await sleep(1500);
      return clientApi.getLatestChainData();
    },
    {
      refetchInterval: 5000,
    }
  );

  if (query.isLoading) return "Loading chaindata..";

  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex flex-row">
          <ChartPieIcon className="h-5 my-auto pr-3" />
          <h3 className="text-md font-medium leading-6 text-gray-900">
            Chaindata
          </h3>
        </div>
        {query.isRefetching && (
          <div>
            <RefetchIndicator />
          </div>
        )}
      </div>
      <div className="space-y-3">
        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
          {query.data.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base text-gray-900 font-semibold">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  <CountUp end={item.stat} separator={","} />
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}