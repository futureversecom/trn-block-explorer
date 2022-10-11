/* eslint-disable react/jsx-key */
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

import { useAccountRefetchStatus } from "@/libs/stores";

import {
	EvmTransactionsForAddress,
	RefetchIndicator,
	TransfersForAddress,
} from "./";

export const AccountTables = ({ walletAddress }) => {
	const isRefetching = useAccountRefetchStatus();

	return (
		<div className="mt-6">
			<Tab.Group>
				<TabList titles={["Transfers", "EVM Transactions"]}>
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
					]}
				/>
			</Tab.Group>
		</div>
	);
};

const TabList = ({ titles, children }) => (
	<Tab.List className="relative mb-2 flex">
		{titles.map((title, key) => (
			<Fragment key={key}>
				<Tab className="text-white outline-none">
					{({ selected }) => (
						<span
							className={clsx(
								"inline-block bg-transparent p-4",
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
