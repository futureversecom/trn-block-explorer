import { CubeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
	PageHeader,
	LoadingBlock,
	ContainerLayout,
	TableLayout,
} from "@/components";
import TimeAgo from "react-timeago";
import { formatAddress } from "@/libs/utils";
import { TransferStatusIcon } from "@/components/icons";
import { useGetTransfersQuery } from "@/libs/api/generated.ts";
import { usePolling } from "@/libs/hooks/usePolling";
import { ethers } from "ethers";

export default function Transfers() {
	let query = usePolling({}, useGetTransfersQuery, {
		limit: 20,
	});

	query.data = query?.data?.transfers?.transfers;

	return (
		<ContainerLayout>
			<PageHeader
				title={`Transfers`}
				icon={<CubeIcon className="my-auto h-5 pr-3" />}
			/>
			{query.isLoading || query.isError ? (
				<LoadingBlock title={"transfers"} />
			) : (
				<div className="mt-8 flex flex-col">
					<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-transfer min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden rounded-md border border-gray-100 shadow-md ">
								<TableLayout.Table>
									<thead className="bg-gray-50">
										<tr>
											<TableLayout.HeadItem text="Hash" />
											<TableLayout.HeadItem text="Height" />
											<TableLayout.HeadItem text="Status" />
											<TableLayout.HeadItem text="Time" />
											<TableLayout.HeadItem text="Amount" />
											<TableLayout.HeadItem text="From" />
											<TableLayout.HeadItem text="To" />
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{query.data.map((transfer, key) => (
											<tr key={key}>
												<Link href={`/transfer/${transfer.extrinsicHash}`}>
													<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
														{formatAddress(transfer.extrinsicHash, 12)}
													</TableLayout.Data>
												</Link>
												<Link href={`/block/${transfer.blockNumber}`}>
													<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
														{transfer.blockNumber}
													</TableLayout.Data>
												</Link>
												<TableLayout.Data>
													<TransferStatusIcon
														status={transfer?.status}
														iconClassName="h-5"
													/>
												</TableLayout.Data>
												<TableLayout.Data>
													<TimeAgo date={transfer.timestamp} />
												</TableLayout.Data>
												<TableLayout.Data>
													{ethers.utils.formatEther(transfer.amount)} Root
												</TableLayout.Data>
												{transfer?.from?.id ? (
													<Link href={`/account/${transfer.from.id}`}>
														<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
															{formatAddress(transfer.from.id)}
														</TableLayout.Data>
													</Link>
												) : (
													<TableLayout.Data>
														{transfer?.status ?? "?"}
													</TableLayout.Data>
												)}
												{transfer?.to?.id ? (
													<Link href={`/account/${transfer.to.id}`}>
														<TableLayout.Data dataClassName="cursor-pointer !text-indigo-500">
															{formatAddress(transfer.to.id)}
														</TableLayout.Data>
													</Link>
												) : (
													<TableLayout.Data>
														{transfer?.status ?? "?"}
													</TableLayout.Data>
												)}
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
