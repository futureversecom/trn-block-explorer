import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	TableLayout,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import TimeAgo from "react-timeago";
import { formatAddress } from "@/libs/utils";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";

export default function Blocks() {
	let query = usePolling({}, useGetBlocksQuery, {
		limit: 20,
	});
	query.data = query?.data?.archive?.block;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Blocks`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"blocks"} />
			) : (
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
								<TableLayout.Table>
									<thead className="bg-gray-50">
										<tr>
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Status" />
											<TableLayout.HeadItem text="Time" />
											<TableLayout.HeadItem text="Extrinsics" />
											<TableLayout.HeadItem text="Events" />
											<TableLayout.HeadItem text="Validator" />
											<TableLayout.HeadItem text="Block hash" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((block, key) => (
											<tr key={key}>
												<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
													<Link href={`/block/${block.height}`}>
														{block.height}
													</Link>
												</TableLayout.Data>
												<TableLayout.Data>
													<BlockFinalizedIcon status={true} />
												</TableLayout.Data>
												<TableLayout.Data>
													<TimeAgo date={block.timestamp} />
												</TableLayout.Data>
												<TableLayout.Data>
													{block.extrinsics_aggregate.aggregate.count || "?"}
												</TableLayout.Data>
												<TableLayout.Data>
													{block.events_aggregate.aggregate.count || "? "}
												</TableLayout.Data>
												<TableLayout.Data>
													{block.validator
														? formatAddress(block.validator)
														: "?"}
												</TableLayout.Data>
												<TableLayout.Data>
													{block.hash ? formatAddress(block.hash, 12) : "?"}
												</TableLayout.Data>
											</tr>
										))}
									</tbody>
								</TableLayout.Table>
							</div>
						</div>
					</div>
				</div>
			)}
		</ContainerLayout>
	);
}
