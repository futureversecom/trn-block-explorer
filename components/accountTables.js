/* eslint-disable react/jsx-key */
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { useAccountRefetchStatus } from "@/libs/stores";

import {
	Erc20TransfersForAddress,
	Erc721TransfersForAddress,
	EvmTransactionsForAddress,
	RefetchIndicator,
	TransfersForAddress,
} from "./";

export const AccountTables = ({ walletAddress }) => {
	const isRefetching = useAccountRefetchStatus();
	const router = useRouter();
	// tab name -> index <-- tab name
	const url_to_index = [
		"transfers",
		"evm_transactions",
		"erc721_transfers",
		"erc20_transfers",
	];

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
				<TabList
					titles={[
						"Transfers",
						"EVM Transactions",
						"ERC721 Transfers",
						"ERC20 Transfers",
					]}
				>
					{isRefetching && (
						<div className="absolute right-2 top-6 flex">
							<RefetchIndicator />
						</div>
					)}
				</TabList>
				<TabPanels
					panels={[
						<TransfersForAddress walletAddress={walletAddress} />,
						<EvmTransactionsForAddress walletAddress={walletAddress} />,
						<Erc721TransfersForAddress walletAddress={walletAddress} />,
						<Erc20TransfersForAddress walletAddress={walletAddress} />,
					]}
				/>
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
