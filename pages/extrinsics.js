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
	const query = useQuery(20);
	const { pages } = usePagination("extrinsics");

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
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-auto border border-gray-400">
								<TableLayout.Table>
									<thead className="bg-transparent text-white">
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
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data?.map((call, key) => (
											<tr key={key}>
												<TableLayout.Data dataClassName="!text-indigo-500 font-bold">
													<Link href={`/extrinsic/${call.id}`}>
														{formatExtrinsicId(call.id)}
													</Link>
												</TableLayout.Data>

												<TableLayout.Data dataClassName="flex">
													<BlockFinalizedIcon
														status={call?.success}
														iconClassName="h-5"
														isExtrinsic={true}
													/>
												</TableLayout.Data>

												<TableLayout.Data>
													{formatAddress(call.extrinsic.hash, 12)}
												</TableLayout.Data>

												<TableLayout.Data>
													<TimeAgo date={call.block.timestamp} />
												</TableLayout.Data>

												<TableLayout.Data dataClassName="!text-indigo-500 font-bold">
													<Link href={`/block/${call.block.height}`}>
														{call.block.height}
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>{call.name}</TableLayout.Data>

												<TableLayout.Data>
													{call.events_aggregate.aggregate.count}
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

const useQuery = (limit) => {
	const { currentPage } = usePagination("extrinsics");

	const query = usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(query.data, limit);

	// Prefetch next page
	usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.archive?.call,
	};
};

const usePages = (data, limit) => {
	const { setPages } = usePagination("extrinsics");

	useEffect(() => {
		if (!data?.archive?.call_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.ceil(data?.archive?.call_aggregate?.aggregate?.count / limit)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.archive?.call_aggregate]);
};
