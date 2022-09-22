import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TimeAgo from "react-timeago";

import { LoadingBlock, RefetchIndicator } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";

export default function BlocksWidget() {
	const query = usePolling({}, useGetBlocksQuery, {
		limit: 10,
	});

	const blocks = query?.data?.archive?.block;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex items-center">
					<CubeIcon className="my-auto h-5 pr-3" />
					<h3 className="text-md font-medium leading-6 text-gray-900">
						Blocks
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/blocks"}>
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
				<LoadingBlock title="Blocks" height="h-80" />
			) : (
				<div className="divide-y rounded-md border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-6">
					{blocks?.map((item, key) => (
						<BlockItem
							key={key}
							height={item.height}
							extrinsics={item?.extrinsics_aggregate?.aggregate?.count || "?"}
							events={item?.events_aggregate?.aggregate?.count || "?"}
							timestamp={item.timestamp}
							status={true}
						/>
					))}
				</div>
			)}
		</div>
	);
}

const BlockItem = ({ height, extrinsics, events, timestamp, status }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					Block#{" "}
					<Link href={`/block/${height}`}>
						<span className="cursor-pointer text-lg text-indigo-500">
							{height}
						</span>
					</Link>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div className="text-teal-800">
					<span className="text-sm text-gray-500">Includes</span>{" "}
					<span className="text-indigo-500">{extrinsics} Extrinsics</span>{" "}
					<span className="text-indigo-500">{events} Events</span>{" "}
				</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-600">
						<TimeAgo date={timestamp} />
					</div>
					<div>
						<BlockFinalizedIcon status={status} />
					</div>
				</div>
			</div>
		</div>
	);
};
