import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PageHeader, LoadingBlock, ContainerLayout } from "@/components";
import { formatAddress } from "@/libs/utils";
import { useGetAccountsQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";
import { ethers } from "ethers";

export default function Accounts() {
	let query = usePolling({}, useGetAccountsQuery, {
		limit: 20,
	});

	query.data = query?.data?.balances?.accounts;

	console.log(query);

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
								<table className="min-w-full divide-y divide-gray-300">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Rank
											</th>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Account
											</th>
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
											>
												Free
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Reserved
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
											>
												Total
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((account, key) => (
											<tr key={key}>
												<td className="font-mediumsm:pl-6 cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm">
													# {key + 1}
												</td>
												<Link href={`/account/${account.id}`}>
													<td className="cursor-pointer whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-indigo-500 sm:pl-6">
														{formatAddress(account.id)}
													</td>
												</Link>
												<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
													{ethers.utils.formatEther(account.free)} Root
												</td>

												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{ethers.utils.formatEther(account.reserved)} Root
												</td>
												<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
													{ethers.utils.formatEther(account.total)} Root
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</ContainerLayout>
	);
}
