import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

import EVMTooltip from "@/components/evm/evmTooltip";
import bugs from "@/components/evm/sol-bugs/bugs.json";
import bugsByVersion from "@/components/evm/sol-bugs/sol-bugs-by-version.json";

export default function SolidityCompilerBugs({ version }) {
	const [open, setOpen] = useState(false);
	const bugsForVersion = bugsByVersion?.[version]?.bugs;
	const bugsToMap = bugs.filter((e) => bugsForVersion?.includes(e.name));

	return (
		<div>
			{bugsForVersion?.length > 0 ? (
				<div
					onClick={() => {
						setOpen(true);
					}}
				>
					<EVMTooltip message={"Solidity version has known compiler bugs."}>
						<ExclamationTriangleIcon className="my-auto h-6 w-6 cursor-pointer text-red-600" />
					</EVMTooltip>
				</div>
			) : (
				<Fragment />
			)}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
									<div>
										<div>
											<Dialog.Title
												as="h3"
												className="text-lg font-medium leading-6 text-gray-900"
											>
												Known Bugs
											</Dialog.Title>
											<div className="mt-2">
												<div className="space-y-2">
													{bugsToMap.map((bug) => (
														<div
															className="flex justify-between text-sm"
															key={bug.uid}
														>
															<div className="overflow-ellipsis">
																{bug.name}
															</div>
															<div>{bug.severity}</div>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
									<div className="mt-5 sm:mt-6">
										<button
											type="button"
											className="inline-flex w-full justify-center border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
											onClick={() => setOpen(false)}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}
