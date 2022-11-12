import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

import { getERC20Balance, getERC721Balance } from "@/libs/evm-api";
import { formatAddress, formatUnits } from "@/libs/utils";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function TokenBalances({ walletAddress }) {
	const query = useQuery(
		["erc20_erc721_evm_token_balances", walletAddress],
		async () => {
			const erc721 = await getERC721Balance(walletAddress);
			console.log(erc721);
			const erc20 = await getERC20Balance(walletAddress);
			console.log(erc20);
			return { erc721, erc20, totalSum: 500 };
		}
	);
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-between border border-gray-300 bg-transparent px-4 py-1.5 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
					{query?.isLoading && "Retrieving Tokens"}
					{query?.isError && "Error Fetching Data"}
					{query?.data?.totalSum && `${query?.data?.totalSum} token(s)`}
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
						<p className="font-semibold">
							ERC20 Tokens ({query?.data?.erc20?.length ?? "0"})
						</p>
					</div>
					<div className="py-1">
						{query?.data?.erc20?.length ? (
							<Fragment>
								{query?.data?.erc20?.map((token, key) => (
									<Menu.Item key={key}>
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
														<span className="font-semibold">
															{token?.contractData?.[0]?.name ?? "??"} (
															{token?.contractData?.[0]?.symbol ?? "??"})
														</span>
														<span className="overflow-ellipsis">
															{formatAddress(token?.address, 9)}
														</span>
													</div>
													<div className="my-auto">
														{formatUnits(
															token?.balance,
															token?.contractData?.[0]?.decimals || 18
														)}
													</div>
												</div>
											</a>
										)}
									</Menu.Item>
								))}
							</Fragment>
						) : (
							<div className="p-4 text-center text-sm">No ERC20 Tokens</div>
						)}
					</div>
					<div className="px-4 py-3">
						<p className="font-semibold">
							ERC721 Tokens ({query?.data?.erc721?.length ?? "0"})
						</p>
					</div>
					<div className="py-1">
						{query?.data?.erc721?.length ? (
							<Fragment>
								{query?.data?.erc721?.map((token, key) => (
									<Menu.Item key={key}>
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
														<span className="font-semibold">
															{token?.contractData?.[0]?.name ?? "??"} (
															{token?.contractData?.[0]?.symbol ?? "??"})
														</span>
														<span className="overflow-ellipsis">
															{formatAddress(token?.address, 9)}
														</span>
													</div>
													<div className="my-auto">{token?.balance}</div>
												</div>
											</a>
										)}
									</Menu.Item>
								))}
							</Fragment>
						) : (
							<div className="p-4 text-center text-sm">No ERC721 Tokens</div>
						)}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
