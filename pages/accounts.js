import { CubeIcon } from "@heroicons/react/24/outline";

import {
	AddressLink,
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
} from "@/components";
import { useGetAccountsQuery } from "@/libs/api/generated.ts";
import { usePages, usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatBalance, getAssetMetadata } from "@/libs/utils";

const PaginationTable = "accounts";

export default function Accounts() {
	const query = useQuery(25);
	const { pages, currentPage } = usePagination(PaginationTable);

	const nativeToken = getAssetMetadata("1").symbol;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Accounts`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
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
											<TableLayout.HeadItem
												text="Rank"
												headItemClassName="text-center"
											/>
											<TableLayout.HeadItem text="Account" />
											<TableLayout.HeadItem text="Root Balance" />
											<TableLayout.HeadItem text="XRP Balance" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data.map((account, key) => {
											const xrpBalance =
												account?.assets?.find((e) => e.assetId == 2)?.balance ??
												0;
											return (
												<tr key={key}>
													<TableLayout.Data dataClassName="text-center">
														# {key + 1 + (currentPage - 1) * 20}
													</TableLayout.Data>

													<TableLayout.Data>
														<AddressLink
															address={account.id}
															isAccount={false}
														/>
													</TableLayout.Data>

													<TableLayout.Data>
														{formatBalance(account?.free, 6)} {nativeToken}
													</TableLayout.Data>

													<TableLayout.Data>
														{formatBalance(xrpBalance, 6)} XRP
													</TableLayout.Data>
												</tr>
											);
										})}
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

const useQuery = (limit) => {
	const { currentPage } = usePagination(PaginationTable);

	const query = usePolling({}, useGetAccountsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(
		PaginationTable,
		query?.data?.balances?.account_aggregate?.aggregate?.count,
		limit
	);

	// Prefetch next page
	usePolling({}, useGetAccountsQuery, {
		limit,
		offset: currentPage * limit,
	});

	return {
		...query,
		data: query?.data?.balances?.account,
	};
};
