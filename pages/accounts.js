import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";

import {
	ContainerLayout,
	LoadingBlock,
	PageHeader,
	Pagination,
	TableLayout,
} from "@/components";
import { useGetAccountsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks";
import { usePagination } from "@/libs/stores";
import { formatAddress, formatBalance, getAssetMetadata } from "@/libs/utils";

export default function Accounts() {
	const query = useQuery(20);
	const { pages, currentPage } = usePagination("accounts");

	const nativeToken = getAssetMetadata("1").symbol;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Accounts`}
				icon={<CubeIcon className="my-auto h-5 pr-3 text-white" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"accounts"} />
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
											<TableLayout.HeadItem text="Free" />
											<TableLayout.HeadItem text="Reserved" />
											<TableLayout.HeadItem text="Total" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-800 bg-transparent">
										{query.data.map((account, key) => (
											<tr key={key}>
												<TableLayout.Data dataClassName="text-center">
													# {key + 1 + (currentPage - 1) * 20}
												</TableLayout.Data>

												<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500 font-bold">
													<Link href={`/account/${account.id}`}>
														{formatAddress(account.id)}
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>
													{formatBalance(account?.free, 6)} {nativeToken}
												</TableLayout.Data>

												<TableLayout.Data>
													{formatBalance(account?.reserved, 6)} {nativeToken}
												</TableLayout.Data>

												<TableLayout.Data>
													{formatBalance(account?.total, 6)} {nativeToken}
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

			{pages?.length > 1 && <Pagination table="accounts" />}
		</ContainerLayout>
	);
}

const useQuery = (limit) => {
	const { currentPage } = usePagination("accounts");

	const query = usePolling({}, useGetAccountsQuery, {
		limit,
		offset: (currentPage - 1) * limit,
	});
	usePages(query.data, limit);

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

const usePages = (data, limit) => {
	const { setPages } = usePagination("accounts");

	useEffect(() => {
		if (!data?.balances?.account_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.ceil(data?.balances?.account_aggregate?.aggregate?.count / limit)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.balances?.account_aggregate, limit]);
};
