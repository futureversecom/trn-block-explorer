import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PageHeader, LoadingBlock, ContainerLayout } from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import TimeAgo from "react-timeago";
import { formatAddress } from "@/libs/utils";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";

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
			{query.isLoading ? (
				<LoadingBlock title={"blocks"} />
			) : (
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Block
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Status
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Time
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Extrinsics
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Events
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Validator
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Block hash
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((block, key) => (
											<tr key={key}>
												<Link href={`/block/${block.height}`}>
													<td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
														{block.height}
													</td>
												</Link>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													<BlockFinalizedIcon status={true} />
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													<TimeAgo date={block.timestamp} />
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{block.extrinsics_aggregate.aggregate.count || "?"}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{block.events_aggregate.aggregate.count || "? "}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{block.validator
														? formatAddress(block.validator)
														: "?"}
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{block.hash ? formatAddress(block.hash, 12) : "?"}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</ContainerLayout>
	);
}
