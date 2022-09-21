import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	TableLayout,
} from "@/components";
import TimeAgo from "react-timeago";
import { formatAddress, formatExtrinsicId } from "@/libs/utils";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";

export default function Extrinsics() {
	let query = usePolling({}, useGetExtrinsicsQuery, {
		limit: 20,
	});

	query.data = query?.data?.archive?.extrinsic;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Extrinsics`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"extrinsics"} />
			) : (
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
								<TableLayout.Table>
									<thead className="bg-gray-50">
										<tr>
											<TableLayout.HeadItem text="Id" />
											<TableLayout.HeadItem text="Status" />
											<TableLayout.HeadItem text="Hash" />
											<TableLayout.HeadItem text="Time" />
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Call" />
											<TableLayout.HeadItem text="Events" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((extrinsic, key) => (
											<tr key={key}>
												<TableLayout.Data dataClassName="!text-indigo-500">
													<Link href={`/extrinsic/${extrinsic.id}`}>
														{formatExtrinsicId(extrinsic.id)}
													</Link>
												</TableLayout.Data>
												<TableLayout.Data>
													<BlockFinalizedIcon
														status={extrinsic?.success}
														iconClassName="h-5"
													/>
												</TableLayout.Data>
												<TableLayout.Data>
													{formatAddress(extrinsic.hash, 12)}
												</TableLayout.Data>
												<TableLayout.Data>
													<TimeAgo date={extrinsic.block.timestamp} />
												</TableLayout.Data>
												<TableLayout.Data dataClassName="!text-indigo-500">
													<Link href={`/block/${extrinsic.block.height}`}>
														{extrinsic.block.height}
													</Link>
												</TableLayout.Data>
												<TableLayout.Data>
													{extrinsic.calls[0].name}
												</TableLayout.Data>
												<TableLayout.Data>
													{extrinsic.events_aggregate.aggregate.count}
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
