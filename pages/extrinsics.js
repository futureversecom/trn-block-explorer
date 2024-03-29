import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	PaginationFallback,
	TableLayout,
	TextLink,
	TimeAgo,
} from "@/components";
import { BlockFinalizedIcon } from "@/components/icons";
import {
	useGetExtrinsicsAggregateQuery,
	useGetExtrinsicsQuery,
} from "@/libs/api/generated.ts";
import { useExtrinsicSuccess, usePages, usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress, formatExtrinsicId } from "@/libs/utils";

const PaginationTable = "extrinsics";

export default function Extrinsics() {
	const query = useQuery(25);
	const { pages } = usePagination(PaginationTable);

	return (
		<ContainerLayout>
			<PageHeader
				title={`Extrinsics`}
				icon={<ArrowsRightLeftIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={PaginationTable} />
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
											<TableLayout.HeadItem text="Age" />
											<TableLayout.HeadItem text="Block" />
											<TableLayout.HeadItem text="Pallet" />
											<TableLayout.HeadItem text="Call" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data?.map((extrinsic, key) => (
											<ExtrinsicRow
												key={key}
												id={extrinsic.id}
												hash={extrinsic.hash}
												extrinsic={extrinsic}
												block={extrinsic.block}
												calls={extrinsic.calls}
											/>
										))}
									</tbody>
								</TableLayout.Table>
							</div>
						</div>
					</div>
				</div>
			)}

			{pages?.length > 1 ? (
				<Pagination table={PaginationTable} />
			) : (
				<PaginationFallback table={PaginationTable} />
			)}
		</ContainerLayout>
	);
}

const ExtrinsicRow = ({ id, hash, extrinsic, block, calls }) => {
	const extrinsicSuccess = useExtrinsicSuccess(extrinsic);

	return (
		<tr>
			<TableLayout.Data dataClassName="font-bold">
				<TextLink link={`/extrinsic/${id}`} text={formatExtrinsicId(id)} />
			</TableLayout.Data>

			<TableLayout.Data dataClassName="flex">
				<BlockFinalizedIcon
					status={extrinsicSuccess}
					iconClassName="h-5"
					isExtrinsic={true}
				/>
			</TableLayout.Data>

			<TableLayout.Data>{formatAddress(hash, 12)}</TableLayout.Data>

			<TableLayout.Data>
				<TimeAgo timestamp={block.timestamp} />
			</TableLayout.Data>

			<TableLayout.Data>
				<TextLink link={`/block/${block.height}`} text={block.height} />
			</TableLayout.Data>

			<TableLayout.Data>
				{calls?.[0]?.name && calls?.[0]?.name?.split(".")[0]}
			</TableLayout.Data>

			<TableLayout.Data>
				<span className="truncate capitalize">
					{calls?.[0]?.name &&
						calls?.[0]?.name?.split(".")[1]?.replaceAll("_", " ")}
				</span>
			</TableLayout.Data>
		</tr>
	);
};

const useQuery = (limit) => {
	const { currentPage } = usePagination(PaginationTable);

	const query = usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});

	const aggregateQuery = usePolling({}, useGetExtrinsicsAggregateQuery);
	usePages(
		PaginationTable,
		aggregateQuery?.data?.archive?.extrinsic_aggregate?.aggregate?.count,
		limit
	);

	// Prefetch next page
	usePolling({}, useGetExtrinsicsQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.archive?.extrinsic,
	};
};
