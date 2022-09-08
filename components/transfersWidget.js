import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { formatAddress } from "@/libs/utils";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { TransferStatusIcon } from "@/components/icons";
import { ethers } from "ethers";
import { useGetTransfersQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";
import { LoadingBlock, RefetchIndicator } from "@/components";

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
							className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							view all
						</button>
					</Link>
				</div>
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Transactions" height="h-80" />
			) : (
				<div className=" h- divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
					{transfers?.map((item, key) => (
						<TransferItem
							key={key}
							from={item?.from?.id}
							to={item?.to?.id}
							id={item.extrinsicHash}
							timestamp={item.timestamp}
							amount={item.amount}
							status={item.status}
						/>
					))}
				</div>
			)}
		</div>
	);
}

const TransferItem = ({ from, to, id, timestamp, amount, status }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					Extrinsic# <span className="text-lg">{formatAddress(id)}</span>
				</div>
				<div className="my-auto flex">
					{ethers.utils.formatEther(amount.toString()).toString()} Root{" "}
					<TransferStatusIcon status={status} iconClassName="h-5" />
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div>
					{status !== "ISSUED" && (
						<>
							<span className="text-gray-500">From</span>{" "}
							<Link href={`/account/${from}`}>
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
							<Link href={`/account/${to}`}>
								<span className="cursor-pointer text-indigo-500">
									{formatAddress(to)}
								</span>
							</Link>
						</>
					)}
				</div>
				<div className="text-sm text-gray-600">
					<TimeAgo date={timestamp} />
				</div>
			</div>
		</div>
	);
};
