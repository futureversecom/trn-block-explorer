import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	TableLayout,
} from "@/components";
import { formatAddress } from "@/libs/utils";
import { useGetAccountsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";
import { ethers } from "ethers";

export default function Accounts() {
	let query = usePolling({}, useGetAccountsQuery, {
		limit: 20,
	});
	query.data = query?.data?.balances?.accounts;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Accounts`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"accounts"} />
			) : (
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
								<TableLayout.Table>
									<thead className="bg-gray-50">
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
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((account, key) => (
											<tr key={key}>
												<TableLayout.Data dataClassName="text-center">
													# {key + 1}
												</TableLayout.Data>

												<Link href={`/account/${account.id}`}>
													<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
														{formatAddress(account.id)}
													</TableLayout.Data>
												</Link>

												<TableLayout.Data>
													{ethers.utils.formatEther(account.free)} Root
												</TableLayout.Data>

												<TableLayout.Data>
													{ethers.utils.formatEther(account.reserved)} Root
												</TableLayout.Data>

												<TableLayout.Data>
													{ethers.utils.formatEther(account.total)} Root
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
