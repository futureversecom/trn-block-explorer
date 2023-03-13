import {
	ChartPieIcon,
	CubeIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";

import { RefetchIndicator } from "@/components";
import { useGetChainDataQuery } from "@/libs/api/generated";
import { usePolling } from "@/libs/hooks";

export default function ChaindataWidget() {
	const [firstCount, setFirstCount] = useState(true);
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

	useEffect(() => {
		if (!chainData || !firstCount) return;

		setTimeout(() => setFirstCount(false), 1500);
	}, [chainData, firstCount]);

	return (
		<div>
			<div className="flex h-[3.5em] flex-row justify-between py-3">
				<div className="flex items-center">
					<ChartPieIcon className="my-auto h-5 pr-3 text-white" />
					<h3 className="text-md font-bold leading-6 text-white">Chain Data</h3>
				</div>
				{query?.isRefetching && (
					<div>
						<RefetchIndicator />
					</div>
				)}
			</div>
			<div className="flex h-[23em] items-center">
				<div className="space-y-6 w-full">
					{[
						{
							name: "Holders",
							stat: chainData?.holders,
						},
						{
							name: "Transfers",
							stat: chainData?.transfers,
						},
						{
							name: "Finalized Blocks",
							stat: chainData?.blocks,
						},
					].map((item) => (
						<ChainDataBlock
							key={item.name}
							name={item.name}
							stat={item.stat}
							firstCount={firstCount}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const ChainDataBlock = ({ name, stat, firstCount }) => {
	return (
		<div className="flex w-full items-center border border-gray-400 bg-transparent text-[#111]">
			<div className="flex items-center">
				<div className="px-8">
					{name === "Holders" && (
						<UserGroupIcon className="h-12 text-gray-200" strokeWidth="1" />
					)}
					{name === "Transfers" && (
						<ChartPieIcon className="h-12 text-gray-200" strokeWidth="1" />
					)}
					{name === "Finalized Blocks" && (
						<CubeIcon className="h-12 text-gray-200" strokeWidth="1" />
					)}
				</div>
			</div>
			<div className="px-4 py-5 sm:p-4">
				<dt className="text-base font-semibold text-gray-200">{name}</dt>
				<dd className="flex items-baseline justify-between md:block lg:flex">
					<div className="flex items-baseline text-2xl font-bold text-white">
						<CountUp
							end={stat}
							duration={1}
							separator={","}
							className="font-number"
							start={firstCount ? 0 : stat - 1}
						/>
					</div>
				</dd>
			</div>
		</div>
	);
};
