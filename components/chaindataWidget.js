import {
	ChartPieIcon,
	CubeIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useMemo } from "react";
import CountUp from "react-countup";

import { LoadingBlock, RefetchIndicator } from "@/components";
import { useGetChainDataQuery } from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";

export default function ChaindataWidget() {
	const query = usePolling({}, useGetChainDataQuery);

	const chainData = useMemo(() => {
		if (!query?.data?.balances?.chain_state) return;

		const [chainState] = query?.data?.balances?.chain_state;

		return {
			blocks: chainState?.block_number,
			holders: chainState?.token_holders,
			transfers: query?.data?.balances?.transfer_aggregate?.aggregate?.count,
		};
	}, [query?.data]);

	return (
		<div>
			<div className="flex flex-row justify-between py-3">
				<div className="flex flex-row">
					<ChartPieIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">Chain Data</h3>
				</div>
				{query.isRefetching && (
					<div>
						<RefetchIndicator />
					</div>
				)}
			</div>
			{query.isLoading ? (
				<LoadingBlock title="Chaindata" height="h-28" />
			) : (
				<div className="space-y-3">
					<dl className="grid grid-cols-1 divide-y-4 divide-gray-400 overflow-hidden border border-gray-400 bg-transparent text-[#111] md:grid-cols-3 md:divide-y-0 md:divide-x-2">
						{[
							{
								name: "Transfers",
								stat: chainData?.transfers,
							},
							{
								name: "Finalized Blocks",
								stat: chainData?.blocks,
							},
							{
								name: "Holders",
								stat: chainData?.holders,
							},
						].map((item) => (
							<div
								key={item.name}
								className="my-auto flex flex-row px-4 py-5 sm:p-4"
							>
								<div className="my-auto pr-3">
									{item.name === "Transfers" && (
										<ChartPieIcon className="h-12 text-gray-200" />
									)}
									{item.name === "Finalized Blocks" && (
										<CubeIcon className="h-12 text-gray-200" />
									)}
									{item.name === "Holders" && (
										<UserGroupIcon className="h-12 text-gray-200" />
									)}
								</div>
								<div>
									<dt className="text-base font-semibold text-gray-200">
										{item.name}
									</dt>
									<dd className="flex items-baseline justify-between md:block lg:flex">
										<div className="flex items-baseline text-2xl font-bold text-white">
											<CountUp
												duration={1}
												end={item.stat}
												separator={","}
												className="font-number"
											/>
										</div>
									</dd>
								</div>
							</div>
						))}
					</dl>
				</div>
			)}
		</div>
	);
}
