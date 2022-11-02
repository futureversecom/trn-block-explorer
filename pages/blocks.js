import { CubeIcon } from "@heroicons/react/24/outline";
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
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

export default function Blocks() {
	const query = useQuery(20);
	const { pages } = usePagination("blocks");

	return (
		<ContainerLayout>
			<PageHeader
				title={`Blocks`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"blocks"} />
			) : (
				<div className="mt-0 flex flex-col">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-auto border border-gray-400 ">
								<TableLayout.Table>
									<thead className="bg-transparent">
										<tr>
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Status" />
											<TableLayout.HeadItem text="Age" />
											<TableLayout.HeadItem text="Extrinsics" />
											<TableLayout.HeadItem text="Events" />
											<TableLayout.HeadItem text="Validator" />
											<TableLayout.HeadItem text="Block hash" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data.map((block, key) => (
											<tr key={key}>
												<TableLayout.Data>
													<Link href={`/block/${block.height}`}>
														<span className="cursor-pointer text-indigo-500 hover:text-white">
															{block.height}
														</span>
													</Link>
												</TableLayout.Data>
												<TableLayout.Data dataClassName="flex">
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
													<Link href={`/account/${block.validator}`}>
														<span className="cursor-pointer text-indigo-500 hover:text-white">
															{block.validator
																? formatAddress(block.validator)
																: "?"}
														</span>
													</Link>
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

			{pages?.length > 1 && <Pagination table="blocks" />}
		</ContainerLayout>
	);
}

const useQuery = (limit) => {
	const { currentPage } = usePagination("blocks");

	const query = usePolling({}, useGetBlocksQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(query.data, limit);

	// Prefetch next page
	usePolling({}, useGetBlocksQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.archive?.block,
	};
};

const usePages = (data, limit) => {
	const { setPages } = usePagination("blocks");

	useEffect(() => {
		if (!data?.archive?.block_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.ceil(data?.archive?.block_aggregate?.aggregate?.count / limit)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.archive?.block_aggregate, limit]);
};
