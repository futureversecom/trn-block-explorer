import { useRouter } from "next/router";
import ContainerLayout from "../../layout/containerLayout";
import PageHeader from "../../components/pageHeader";
import { CubeIcon } from "@heroicons/react/24/outline";
import LoadingBlock from "../../components/loadingBlock";
import moment from "moment";
import { formatAddress } from "../../utils/utils";
import BlockFinalizedIcon from "../../components/icons/blockFinalizedIcon";
import TimeAgo from "react-timeago";
import { useGetTransferByHashQuery } from "../../libs/api/generated.ts";
import { usePolling } from "../../libs/hooks/usePolling";
import { ethers } from "ethers";
import Link from "next/link";

export default function Transfer() {
  const router = useRouter();
  const { hash } = router.query;

  let query = usePolling({}, useGetTransferByHashQuery, {
    hash,
  });

  query.data = query?.data?.transfers?.transfers[0];

  return (
    <ContainerLayout>
      <PageHeader
        title={`Transfer # ${hash}`}
        icon={<CubeIcon className="my-auto h-5 pr-3" />}
      />
      {query.isLoading ? (
        <LoadingBlock title={`Transfer ${hash}`} />
      ) : (
        <>
          <div className="mt-5 overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
            <div className=" px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Transaction Hash
                  </dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {hash}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">
                    Block Height
                  </dt>
                  <Link href={`/block/${query.data.blockNumber}`}>
                    <dd className="mt-1 cursor-pointer text-sm text-indigo-500 sm:col-span-2 sm:mt-0">
                      {query.data.blockNumber}
                    </dd>
                  </Link>
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
                      <span className="ml-2 text-sm">{query.data.status}</span>
                    </div>
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">From</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.from?.id}
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">To</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {query.data.to?.id}
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900">Amount</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                    {ethers.utils.formatEther(query.data.amount)} Root
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
