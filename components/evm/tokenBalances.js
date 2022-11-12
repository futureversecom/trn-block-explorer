import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function TokenBalances({ walletAddress }) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-between border border-gray-300 bg-transparent px-4 py-1.5 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
					Retrieving tokens..
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 bg-[#111] text-white border border-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-4 py-3">
						<p className="font-semibold">ERC20 Tokens</p>
					</div>
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? "text-gray-200" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									<div className="flex justify-between">
										<div className="flex flex-col">
											<span>Sylo (SYLO)</span>
											<span>0x00000000000000000000</span>
										</div>
										<div className="my-auto">100000</div>
									</div>
								</a>
							)}
						</Menu.Item>
					</div>
					<div className="px-4 py-3">
						<p className="font-semibold">ERC721 Tokens</p>
					</div>
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? "text-gray-200" : "text-white",
										"block px-4 py-2 text-sm"
									)}
								>
									<div className="flex justify-between">
										<div className="flex flex-col">
											<span>Scenes & Sounds</span>
											<span>0x00000000000000000000</span>
										</div>
										<div className="my-auto">25 NFT(s)</div>
									</div>
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
