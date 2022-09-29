import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TimeAgo from "react-timeago";

import { DummyListItem, RefetchIndicator } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { formatExtrinsicId } from "@/libs/utils";

export default function ExtrinsicsWidget() {
	const query = usePolling({}, useGetExtrinsicsQuery, { limit: 10 });
	query.data = query?.data?.archive?.extrinsic;

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex items-center">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">
						Extrinsics
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/transfers"}>
						<button
							type="button"
							className="inline-flex items-center border font-bold border-indigo-500 px-4 py-1.5 text-xs text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							View All
						</button>
					</Link>
				</div>
			</div>
			<div className="divide-y border border-gray-400 divide-gray-400 px-4 py-3 sm:px-6 bg-transparent min-h-[760px]">
			{query.isLoading ? (
				DummyListItem(10)
			) : (
				query.data?.map((item, key) => (
					<Extrinsic
						key={key}
						success={item.success}
						call={item.calls[0].name}
						timestamp={item.block.timestamp}
						extrinsicId={item.id}
					/>
				))
			)}
			</div>
		</div>
	);
}

const Extrinsic = ({ success, call, timestamp, extrinsicId }) => {
	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					<span className="mr-2 text-white">Extrinsic#</span>
					<span className="cursor-pointer text-lg text-indigo-500 font-number">
						<Link href={`/extrinsic/${extrinsicId}`}>
							{formatExtrinsicId(extrinsicId)}
						</Link>
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between text-sm text-gray-500">
				<div className="text-gray-200">{call}</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-200">
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
