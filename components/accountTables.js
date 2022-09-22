/* eslint-disable react/jsx-key */

import clsx from "clsx";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useAccountRefetchStatus } from "@/libs/stores";
import { ErcTransfersForAddress, RefetchIndicator } from "@/components";

export const AccountTables = ({ walletAddress }) => {
	const isRefetching = useAccountRefetchStatus();

	return (
		<div className="mt-6">
			<Tab.Group>
				<TabList titles={["ERC Transfers"]}>
					{isRefetching && (
						<div className="absolute right-2 top-5 flex">
							<RefetchIndicator />
						</div>
					)}
				</TabList>
				<TabPanels
					panels={[<ErcTransfersForAddress walletAddress={walletAddress} />]}
				/>
			</Tab.Group>
		</div>
	);
};

const TabList = ({ titles, children }) => (
	<Tab.List className="relative mb-2 flex rounded border-b bg-white shadow-sm">
		{titles.map((title, key) => (
			<Fragment key={key}>
				<Tab className="outline-none">
					{({ selected }) => (
						<span
							className={clsx(
								"inline-block rounded-t-lg bg-white p-4",
								selected &&
									"border-b-2 border-indigo-500 text-indigo-500 duration-300"
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
