import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { BlockFinalizedIcon } from "@/components/icons";
import { getEVMTransactions } from "@/libs/evm-api";
import { formatAddress } from "@/libs/utils";

import { DummyListItem, RefetchIndicator, TextLink, TimeAgo } from "./";

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
		<div className="flex flex-col">
			<div className="flex flex-row justify-between py-3">
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
							className="inline-flex items-center border border-indigo-500 px-4 py-2 text-xs font-bold text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			<div className="max-h-fit divide-y divide-gray-400 overflow-auto rounded-sm border border-gray-400 bg-transparent px-4 sm:px-6">
				{query.isLoading
					? DummyListItem(limit)
					: query?.data?.docs?.map((tx, key) => (
							<EvmTx
								key={key}
								from={tx?.from}
								success={tx?.status === 1}
								to={tx?.to || tx?.creates}
								txHash={tx?.transactionHash || tx?.hash}
								timestamp={tx?.timestamp || tx?.firstSeen}
							/>
					  ))}
			</div>
		</div>
	);
}

const EvmTx = ({ txHash, to, from, timestamp, success }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					<span className="mr-2 text-white">Tx Hash</span>
					<TextLink
						link={`/tx/${txHash}`}
						linkClassName="text-lg"
						text={formatAddress(txHash)}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-between text-sm text-gray-500">
				<div className="text-gray-200">
					From:{" "}
					<TextLink link={`/address/${from}`} text={formatAddress(from)} />, To:{" "}
					<TextLink link={`/address/${to}`} text={formatAddress(to)} />
				</div>
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
