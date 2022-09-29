import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import TimeAgo from "react-timeago";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetExtrinsicsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress, formatExtrinsicId } from "@/libs/utils";

export default function Extrinsics() {
	const { pages, currentPage } = usePagination("extrinsics");

	let query = usePolling({}, useGetExtrinsicsQuery, {
		limit: 20,
		offset: (currentPage - 1) * 20,
	});
	usePages(query.data);
	query.data = query?.data?.archive?.extrinsic;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Extrinsics`}
				icon={<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"extrinsics"} />
			) : (
				<div className="mt-0 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100">
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

			{pages?.length > 1 && <Pagination table="extrinsics" />}
		</ContainerLayout>
	);
}

const usePages = (data) => {
	const { setPages } = usePagination("extrinsics");

	useEffect(() => {
		if (!data?.archive?.extrinsic_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.floor(data?.archive?.extrinsic_aggregate?.aggregate?.count / 20)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.archive?.extrinsic_aggregate]);
};
