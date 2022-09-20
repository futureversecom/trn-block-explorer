import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { LoadingBlock, RefetchIndicator } from "@/components";
import { formatExtrinsicId } from "@/libs/utils";

export default function ExtrinsicsWidget() {
	const query = usePolling({}, useGetExtrinsicsQuery, { limit: 10 });
	query.data = query?.data?.archive?.extrinsic;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3" />
					<h3 className="text-md font-medium leading-6 text-gray-900">
						Extrinsics
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
				<LoadingBlock title="Extrinsics" height="h-80" />
			) : (
				<div className="divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
					{query.data?.map((item, key) => (
						<Extrinsic
							key={key}
							success={item.success}
							call={item.calls[0].name}
							timestamp={item.block.timestamp}
							extrinsicId={formatExtrinsicId(item.id)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

const Extrinsic = ({ success, call, timestamp, extrinsicId }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					Extrinsic#{" "}
					<Link href={`/extrinsic/${extrinsicId}`}>
						<span className="cursor-pointer text-lg text-indigo-500">
							{extrinsicId}
						</span>
					</Link>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div>{call}</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-600">
						<TimeAgo date={timestamp} />
					</div>
					<div>
						<BlockFinalizedIcon status={success} />
					</div>
				</div>
			</div>
		</div>
	);
};
