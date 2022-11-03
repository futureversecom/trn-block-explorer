import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useMemo } from "react";

import { DummyListItem, RefetchIndicator, TimeAgo } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling, useSubscribeHeader } from "@/libs/hooks";
import { useTimeTicker } from "@/libs/stores";
import { numberWithCommas } from "@/libs/utils";

function removeDuplicates(a, b) {
	return Array.from(
		[...a, ...b].reduce((m, o) => m.set(o.height, o), new Map()).values()
	);
}

export default function BlocksWidget() {
	const query = usePolling({}, useGetBlocksQuery, {
		limit: 10,
	});
	const unfinalizedBlocks = useSubscribeHeader();
	useTimeTicker();

	let dedupedBlocks = useMemo(() => {
		if (
			unfinalizedBlocks &&
			unfinalizedBlocks.length > 0 &&
			query?.data?.archive?.block
		) {
			return removeDuplicates(
				unfinalizedBlocks,
				query?.data?.archive?.block
			).slice(0, 10);
		}
		return query?.data?.archive?.block;
	}, [unfinalizedBlocks, query?.data]);

	const blocks = dedupedBlocks;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex items-center">
					<CubeIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">
						Latest Blocks
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/blocks"}>
						<button
							type="button"
							className="inline-flex items-center border border-indigo-500 px-4 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			<div className="h-[46.688em] max-h-[46.688em] divide-y divide-gray-400 overflow-scroll border border-gray-400 bg-transparent px-4 pb-3 pt-1 sm:px-6 md:overflow-visible">
				{query.isLoading
					? DummyListItem(10)
					: blocks?.map((item, key) => (
							<BlockItem
								key={key}
								height={item.height}
								extrinsics={item?.extrinsics_aggregate?.aggregate?.count || "?"}
								events={item?.events_aggregate?.aggregate?.count || "?"}
								timestamp={item.timestamp}
								status={item.isFinalized ?? true}
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
					{status == true ? (
						<Link href={`/block/${height}`}>
							<span className="cursor-pointer text-lg text-indigo-500 hover:text-white">
								{numberWithCommas(height)}
							</span>
						</Link>
					) : (
						// for unfinalized blocks, the details page will not be available for now so we'll remove the link
						<span className="text-lg text-indigo-800">
							{numberWithCommas(height)}
						</span>
					)}
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div className="text-sm text-gray-200">
					<span>Includes</span> <span>{extrinsics} Extrinsics</span>{" "}
					<span>{events} Events</span>{" "}
				</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-200">
						<TimeAgo timestamp={timestamp} />
					</div>
					<div>
						<BlockFinalizedIcon status={status} />
					</div>
				</div>
			</div>
		</div>
	);
};
