import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TimeAgo from "react-timeago";

import { DummyListItem, RefetchIndicator } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { numberWithCommas } from "@/libs/utils";

export default function BlocksWidget() {
	const query = usePolling({}, useGetBlocksQuery, {
		limit: 10,
	});

	const blocks = query?.data?.archive?.block;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex items-center">
					<CubeIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-medium leading-6 text-white">
						Latest Blocks
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/blocks"}>
						<button
							type="button"
							className="inline-flex items-center rounded border border-indigo-500 px-4 py-1.5 text-xs font-medium text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			<div className="min-h-[760px] divide-y divide-gray-400 rounded border border-gray-400 bg-transparent px-4 py-3 sm:px-6">
				{query.isLoading
					? DummyListItem(10)
					: blocks?.map((item, key) => (
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
		</div>
	);
}

const BlockItem = ({ height, extrinsics, events, timestamp, status }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					<span className="mr-2 text-white">Block#</span>
					<Link href={`/block/${height}`}>
						<span className="cursor-pointer font-number text-lg text-indigo-500">
							{numberWithCommas(height)}
						</span>
					</Link>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div className="text-sm text-gray-200">
					<span>Includes</span> <span>{extrinsics} Extrinsics</span>{" "}
					<span>{events} Events</span>{" "}
				</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-200">
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
