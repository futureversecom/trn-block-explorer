import { useRouter } from "next/router";
import ContainerLayout from "../../layout/containerLayout";
import PageHeader from "../../components/pageHeader";
import { CubeIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import LoadingBlock from "../../components/loadingBlock";
import * as clientApi from "../../utils/client";
import moment from "moment";
import { sleep } from "../../utils/utils";
import Link from "next/link";
import BlockFinalizedIcon from "../../components/icons/blockFinalizedIcon";
import TimeAgo from "react-timeago";

export default function Block() {
  const router = useRouter();
  const { blocknumber } = router.query;
  const query = useQuery(
    [`blocknumber_${blocknumber}`],
    async () => {
      console.log(`Fetching block ${blocknumber}`);
      await sleep();
      return clientApi.getBlock();
    },
    {
      refetchInterval: 5000,
    }
  );

  const getPrevBlock = () => {
    if (parseInt(blocknumber) == 0) {
      return 0;
    } else {
      return parseInt(blocknumber) - 1;
    }
  };

  return (
    <ContainerLayout>
      <PageHeader
        title={`Block # ${blocknumber}`}
        icon={<CubeIcon className="h-5 my-auto pr-3" />}
      />
      {query.isLoading ? (
        <LoadingBlock title={`Block ${blocknumber}`} />
      ) : (
        <>
          <div className="overflow-hidden bg-white border border-gray-100 rounded-md shadow-md mt-5">
            <div className=" px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Timestamp
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {moment(query.data.timestamp).format("LLL")}{" "}
                    <span className="text-xs ml-3">
                      <TimeAgo date={query.data.timestamp} />
                    </span>
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Status</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    <div className="flex flex-row space-x-3">
                      <BlockFinalizedIcon status={query.data.status} />
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
                        {query.data.parentHash}
                      </span>
                    </Link>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    State Root
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.stateRoot}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Extrinsics Root
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.extrinsicsRoot}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Collator
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.collator}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Spec Version
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.specVersion}
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
