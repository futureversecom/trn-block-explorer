import { useRouter } from "next/router";
import ContainerLayout from "../../layout/containerLayout";
import PageHeader from "../../components/pageHeader";
import { CubeIcon } from "@heroicons/react/24/outline";
import LoadingBlock from "../../components/loadingBlock";
import moment from "moment";
import Link from "next/link";
import BlockFinalizedIcon from "../../components/icons/blockFinalizedIcon";
import TimeAgo from "react-timeago";
import { useGetBlockQuery } from "../../libs/api/generated.ts";
import { usePolling } from "../../libs/hooks/usePolling";
import JSONPretty from "react-json-pretty";

export default function Block() {
  const router = useRouter();
  const { blocknumber } = router.query;
  let query = usePolling({}, useGetBlockQuery, {
    height: parseInt(blocknumber),
  });

  query.data = query?.data?.archive?.block[0];

  const getPrevBlock = () => {
    if (parseInt(blocknumber) == 0) {
      return 0;
    } else {
      return parseInt(blocknumber) - 1;
    }
  };

  if (
    (!query.isLoading && !query.data) ||
    Number(blocknumber) >= Number.MAX_SAFE_INTEGER
  ) {
    return "No data found";
  }

  return (
    <ContainerLayout>
      <PageHeader
        title={`Block # ${blocknumber}`}
        icon={<CubeIcon className="my-auto h-5 pr-3" />}
      />
      {query.isLoading ? (
        <LoadingBlock title={`Block ${blocknumber}`} />
      ) : (
        <>
          <div className="mt-5 overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
            <div className=" px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Height</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {blocknumber}
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Timestamp
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {moment(query.data.timestamp).format("LLL")}{" "}
                    <span className="ml-3 text-xs">
                      <TimeAgo date={query.data.timestamp} />
                    </span>
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Status</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="flex flex-row space-x-3">
                      <BlockFinalizedIcon status={true} />
                    </div>
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Hash</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.hash}
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Parent Hash
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    <Link href={`/block/${getPrevBlock()}`}>
                      <span className="cursor-pointer text-indigo-500">
                        {query.data.parent_hash}
                      </span>
                    </Link>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    State Root
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.state_root}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Extrinsics Root
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.extrinsics_root}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Events</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="h-64 overflow-scroll">
                      <JSONPretty id="json-pretty" data={query.data.events} />
                    </div>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Extrinsics
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="h-64 overflow-scroll">
                      <JSONPretty
                        id="json-pretty"
                        data={query.data.extrinsics}
                      />
                    </div>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Spec Version
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.spec_id}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </ContainerLayout>
  );
}
