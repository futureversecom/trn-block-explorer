import {
  ChartPieIcon,
  UserGroupIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import RefetchIndicator from "./refetchIndicator";
import LoadingBlock from "./loadingBlock";

export default function ChaindataWidget() {
  const query = {
    isRefetching: false,
    isLoading: false,
  };
  return (
    <div>
      <div className="flex flex-row justify-between py-3">
        <div className="flex flex-row">
          <ChartPieIcon className="my-auto h-5 pr-3" />
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
      {query.isLoading ? (
        <LoadingBlock title="Chaindata" height="h-28" />
      ) : (
        <div className="space-y-3">
          <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
            {[
              {
                name: "Transfers",
                stat: 5000,
              },
              {
                name: "Finalized Blocks",
                stat: 5000,
              },
              {
                name: "Holders",
                stat: 5000,
              },
            ].map((item) => (
              <div
                key={item.name}
                className="my-auto flex flex-row px-4 py-5 sm:p-6"
              >
                <div className="my-auto pr-3">
                  {item.name === "Transfers" && (
                    <ChartPieIcon className="h-12 text-gray-800" />
                  )}
                  {item.name === "Finalized Blocks" && (
                    <CubeIcon className="h-12 text-gray-800" />
                  )}
                  {item.name === "Holders" && (
                    <UserGroupIcon className="h-12 text-gray-800" />
                  )}
                </div>
                <div>
                  <dt className="text-base font-semibold text-gray-900">
                    {item.name}
                  </dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      <CountUp end={item.stat} separator={","} />
                    </div>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
