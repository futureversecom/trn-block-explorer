import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import {
	DummyListItem,
	RefetchIndicator,
	TextLink,
	TimeAgo,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { useExtrinsicSuccess, usePolling } from "@/libs/hooks";
import { formatExtrinsicId } from "@/libs/utils";

export default function ExtrinsicsWidget() {
	const query = usePolling({}, useGetExtrinsicsQuery, { limit: 10 });
	query.data = query?.data?.archive?.extrinsic;

	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between py-3">
				<div className="flex items-center">
					<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">
						Latest Extrinsics
					</h3>
				</div>
				<div>
					{query.isRefetching && <RefetchIndicator />}
					<Link href={"/extrinsics"}>
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
					? DummyListItem(10)
					: query.data?.map((extrinsic, key) => (
							<Extrinsic
								key={key}
								extrinsic={extrinsic}
								call={extrinsic.calls[0].name}
								timestamp={extrinsic.block.timestamp}
								extrinsicId={extrinsic.id}
							/>
					  ))}
			</div>
		</div>
	);
}

const Extrinsic = ({ extrinsic, call, timestamp, extrinsicId }) => {
	const extrinsicSuccess = useExtrinsicSuccess(extrinsic);

	return (
		<div className="block py-3">
			<div className="flex flex-row justify-between">
				<div className="text-sm font-bold">
					<span className="mr-2 text-white">Extrinsic#</span>
					<span>
						<TextLink
							linkClassName="text-lg"
							link={`/extrinsic/${extrinsicId}`}
							text={formatExtrinsicId(extrinsicId)}
						/>
					</span>
				</div>
			</div>
			<div className="flex flex-row justify-between text-sm text-gray-500">
				<div className="text-gray-200">{call}</div>
				<div className="flex space-x-3">
					<div className="text-sm text-gray-200">
						<TimeAgo timestamp={timestamp} />
					</div>
					<div>
						<BlockFinalizedIcon status={extrinsicSuccess} isExtrinsic={true} />
					</div>
				</div>
			</div>
		</div>
	);
};
