import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { DummyListItem, RefetchIndicator, TimeAgo } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { getEVMTransactions } from "@/libs/evm-api";
import { formatAddress } from "@/libs/utils";

export default function EvmTransactionsWidget() {
	const limit = 10;
	const query = useQuery(
		["evm_transactions_overview", limit],
		() => {
			return getEVMTransactions(0, limit);
		},
		{
			refetchInterval: 15_000,
		}
	);

	return (
		<div>
			<div className="flex flex-row justify-between py-3 h-[3.5em]">
				<div className="flex items-center">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">
						Latest EVM Transactions
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/evmtransactions"}>
						<button
							type="button"
							className="inline-flex items-center border border-indigo-500 px-4 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			<div className="h-[23em] max-h-[23em] divide-y divide-gray-400 overflow-scroll border border-gray-400 bg-transparent px-4 pb-3 pt-1 sm:px-6">
				{query.isLoading
					? DummyListItem(limit)
					: query?.data?.docs?.map((tx, key) => (
							<EvmTx
								key={key}
								success={tx?.status === 1}
								method={tx?.parsedData?.name}
								txHash={tx?.transactionHash || tx?.hash}
								timestamp={tx?.timestamp || tx?.firstSeen}
							/>
					  ))}
			</div>
		</div>
	);
}

const EvmTx = ({ txHash, method, timestamp, success }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					<span className="mr-2 text-white">Tx Hash</span>
					<span className="cursor-pointer text-lg text-indigo-500 hover:text-white">
						<Link href={`/tx/${txHash}`}>{formatAddress(txHash)}</Link>
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between text-sm text-gray-500">
				<div className="text-gray-200">{method ?? "-"}</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-200">
						<TimeAgo timestamp={timestamp * 1000} />
					</div>
					<div>
						<BlockFinalizedIcon status={success} isExtrinsic={true} />
					</div>
				</div>
			</div>
		</div>
	);
};
