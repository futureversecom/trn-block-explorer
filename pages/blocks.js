import { CubeIcon } from "@heroicons/react/24/outline";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
	TextLink,
	TimeAgo,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import { useGetBlocksQuery } from "@/libs/api/generated.ts";
import { usePages, usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress } from "@/libs/utils";

const PaginationTable = "blocks";

export default function Blocks() {
	const query = useQuery(25);
	const { pages } = usePagination(PaginationTable);

	return (
		<ContainerLayout>
			<PageHeader
				title={`Blocks`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={PaginationTable} />
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
											<BlockRow
												key={key}
												height={block.height}
												hash={block.hash}
												extrinsics_aggregate={block.extrinsics_aggregate}
												events_aggregate={block.events_aggregate}
												timestamp={block.timestamp}
												validator={block.validator}
											/>
										))}
									</tbody>
								</TableLayout.Table>
							</div>
						</div>
					</div>
				</div>
			)}

			{pages?.length > 1 && <Pagination table={PaginationTable} />}
		</ContainerLayout>
	);
}

const BlockRow = ({
	height,
	hash,
	extrinsics_aggregate,
	events_aggregate,
	timestamp,
	validator,
}) => {
	return (
		<tr>
			<TableLayout.Data>
				<TextLink link={`/block/${height}`} text={height} />
			</TableLayout.Data>

			<TableLayout.Data dataClassName="flex">
				<BlockFinalizedIcon status={true} />
			</TableLayout.Data>

			<TableLayout.Data>
				<TimeAgo timestamp={timestamp} />
			</TableLayout.Data>

			<TableLayout.Data>
				{extrinsics_aggregate.aggregate.count || "?"}
			</TableLayout.Data>

			<TableLayout.Data>
				{events_aggregate.aggregate.count || "? "}
			</TableLayout.Data>

			<TableLayout.Data>
				{validator ? (
					<TextLink
						link={`/address/${validator}`}
						text={formatAddress(validator)}
					/>
				) : (
					<span>?</span>
				)}
			</TableLayout.Data>

			<TableLayout.Data>
				{hash ? formatAddress(hash, 12) : "?"}
			</TableLayout.Data>
		</tr>
	);
};

const useQuery = (limit) => {
	const { currentPage } = usePagination(PaginationTable);

	const query = usePolling({}, useGetBlocksQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(
		PaginationTable,
		query?.data?.archive?.block_aggregate?.aggregate?.count,
		limit
	);

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
