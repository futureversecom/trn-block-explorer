/* eslint-disable react/jsx-key */
import { Tab } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { isContract } from "@/libs/evm-api";
import { useAccountRefetchStatus } from "@/libs/stores";

import {
	Erc20TransfersForAddress,
	Erc721TransfersForAddress,
	EvmTransactionsForAddress,
	RefetchIndicator,
	TransfersForAddress,
} from "./";

import dynamic from 'next/dynamic';

const ContractTab = dynamic(() => import("@/components/evm/ContractTab"), {
	ssr: false,
});

// import ContractTab from '@/components/evm/ContractTab'

export const AccountTables = ({ walletAddress }) => {
	const isRefetching = useAccountRefetchStatus();
	const router = useRouter();
	// tab name -> index <-- tab name
	let url_to_index = [
		"transfers",
		"evm_transactions",
		"erc721_transfers",
		"erc20_transfers",
	];

	const isContractQuery = useQuery(
		[walletAddress, "isContract"],
		() => {
			return isContract(walletAddress).then((data) => {
				return data;
			});
		},
		{
			refetchInterval: 0,
		}
	);

	let panelTitles = [
		"Transfers",
		"EVM Transactions",
		"ERC721 Transfers",
		"ERC20 Transfers",
	];

	let panels = [
		<TransfersForAddress walletAddress={walletAddress} />,
		<EvmTransactionsForAddress walletAddress={walletAddress} />,
		<Erc721TransfersForAddress walletAddress={walletAddress} />,
		<Erc20TransfersForAddress walletAddress={walletAddress} />,
	];

	if (isContractQuery?.data?.isContract) {
		panelTitles.push(
			<div className="flex space-x-1 my-auto">
				{isContractQuery?.data?.verified && (
					<CheckCircleIcon className="h-5 w-5 text-green-500 my-auto" />
				)}
				<div>Contract</div>
			</div>
		);

		panels.push(<ContractTab walletAddress={walletAddress} />);

		url_to_index.push("contract")
	}

	return (
		<div>
			<Tab.Group
				defaultIndex={url_to_index.indexOf(router?.query?.tab) || 0}
				onChange={(e) => {
					router.push({
						...router,
						query: {
							...router.query,
							tab: url_to_index[e],
						},
					});
				}}
			>
				<TabList titles={panelTitles}>
					{isRefetching && (
						<div className="absolute right-2 top-6 flex">
							<RefetchIndicator />
						</div>
					)}
				</TabList>
				<TabPanels panels={panels} />
			</Tab.Group>
		</div>
	);
};

const TabList = ({ titles, children }) => (
	<Tab.List className="relative flex space-x-2 mb-3">
		{titles.map((title, key) => (
			<Fragment key={key}>
				<Tab className="text-white outline-none">
					{({ selected }) => (
						<span
							className={clsx(
								"inline-block bg-transparent px-2 py-1",
								selected && "border-b-2 border-gray-500 text-white duration-300"
							)}
						>
							{title}
						</span>
					)}
				</Tab>
			</Fragment>
		))}
		{children}
	</Tab.List>
);

const TabPanels = ({ panels }) => (
	<Tab.Panels>
		{panels.map((panel, key) => (
			<Fragment key={key}>
				<Tab.Panel>{panel}</Tab.Panel>
			</Fragment>
		))}
	</Tab.Panels>
);
