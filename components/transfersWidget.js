import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
import Link from "next/link";

import { LoadingBlock, RefetchIndicator, TimeAgo } from "@/components";
import { TransferStatusIcon } from "@/components/icons";
import { useGetTransfersQuery } from "@/libs/api/generated.ts";
import { useExtrinsicId, usePolling } from "@/libs/hooks";
import { formatAddress, formatUnits } from "@/libs/utils";

export default function TransfersWidget() {
	const query = usePolling({}, useGetTransfersQuery, { limit: 10 });
	const transfers = query?.data?.transfers?.transfers;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
					<h3 className="text-md font-medium leading-6 text-gray-900">
						Transfers
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/transfers"}>
						<button
							type="button"
							className="inline-flex items-center border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Transactions" height="h-80" />
			) : (
				<div className="divide-y border border-gray-100 bg-white px-4 py-3 sm:px-6">
					{transfers?.map((item, key) => (
						<TransferItem
							key={key}
							from={item?.from?.id}
							to={item?.to?.id}
							extrinsicHash={item.extrinsicHash}
							timestamp={item.timestamp}
							amount={item.amount}
							status={item.status}
							blockNumber={item.blockNumber}
						/>
					))}
				</div>
			)}
		</div>
	);
}

const TransferItem = ({
	from,
	to,
	extrinsicHash,
	timestamp,
	amount,
	status,
	blockNumber,
}) => {
	const id = useExtrinsicId(extrinsicHash);

	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					Extrinsic#{" "}
					{id?.formatted ? (
						<Link href={`/extrinsic/${id.raw}`}>
							<span className="cursor-pointer text-lg text-indigo-500">
								{id.formatted}
							</span>
						</Link>
					) : (
						<span className="text-lg">{blockNumber}-</span>
					)}
				</div>
				<div className="my-auto flex">
					{formatUnits(amount, 18)} Root{" "}
					<TransferStatusIcon status={status} iconClassName="h-5" />
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div>
					{status !== "ISSUED" && (
						<>
							<span className="text-gray-500">From</span>{" "}
							<Link href={`/address/${from}`}>
								<span className="cursor-pointer text-indigo-500">
									{formatAddress(from)}
								</span>
							</Link>{" "}
						</>
					)}
					{status !== "BURNED" && (
						<>
							<span className="text-gray-500">
								{status === "ISSUED" ? "To" : "to"}
							</span>{" "}
							<Link href={`/address/${to}`}>
								<span className="cursor-pointer text-indigo-500">
									{formatAddress(to)}
								</span>
							</Link>
						</>
					)}
				</div>
				<div className="text-sm text-gray-600">
					<TimeAgo timestamp={timestamp} />
				</div>
			</div>
		</div>
	);
};
