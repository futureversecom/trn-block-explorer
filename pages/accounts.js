import { CubeIcon } from "@heroicons/react/24/outline";
import { ethers } from "ethers";
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
import { formatAddress } from "@/libs/utils";

export default function Accounts() {
	const { pages, currentPage } = usePagination("accounts");

	let query = usePolling({}, useGetAccountsQuery, {
		limit: 20,
		offset: (currentPage - 1) * 20,
	});
	usePages(query.data);
	query.data = query?.data?.balances?.account;

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
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden border border-gray-200">
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
													# {key + 1}
												</TableLayout.Data>

												<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500 font-bold">
													<Link href={`/account/${account.id}`}>
														{formatAddress(account.id)}
													</Link>
												</TableLayout.Data>

												<TableLayout.Data>
													{ethers.utils.formatUnits(account.free || "0", 6)} XRP
												</TableLayout.Data>

												<TableLayout.Data>
													{ethers.utils.formatUnits(account.reserved || "0", 6)}{" "}
													XRP
												</TableLayout.Data>

												<TableLayout.Data>
													{ethers.utils.formatUnits(account.total || "0", 6)}{" "}
													XRP
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

const usePages = (data) => {
	const { setPages } = usePagination("accounts");

	useEffect(() => {
		if (!data?.balances?.account_aggregate) return;

		setPages(
			Array.from(
				Array(
					Math.floor(data?.balances?.account_aggregate?.aggregate?.count / 20)
				)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.balances?.account_aggregate]);
};
