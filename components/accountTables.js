/* eslint-disable react/jsx-key */
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

import { ErcTransfersForAddress, RefetchIndicator } from "@/components";
import { useAccountRefetchStatus } from "@/libs/stores";

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
	<Tab.List className="relative mb-2 flex">
		{titles.map((title, key) => (
			<Fragment key={key}>
				<Tab className="outline-none text-white">
					{({ selected }) => (
						<span
							className={clsx(
								"inline-block bg-transparent p-4",
								selected &&
									"border-b-2 border-gray-500 text-white duration-300"
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
