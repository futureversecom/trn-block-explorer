import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { IS_MAINNET } from "@/libs/constants";

const links = [
	// {
	// 	title: "Dashboard",
	// 	href: "/",
	// },
	{
		title: "Blocks",
		href: "/blocks",
	},
	{
		title: "Extrinsics",
		href: "/extrinsics",
	},
	{
		title: "EVM Transactions",
		href: "/evmtransactions",
	},
	{
		title: "Accounts",
		href: "/accounts",
	},
	{
		title: "Assets",
		href: "/assets",
	},
];

export default function Header() {
	const router = useRouter();

	return (
		<Disclosure as="nav" className="sm:pt-[23px]">
			{({ open, close }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-10">
							<div className="inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 select-none items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center text-white">
									<Link href="/">
										<span
											className={clsx(
												`my-auto cursor-pointer text-nav leading-[23px] tracking-[1.1px]`,
												router.pathname === "/" && "font-extrabold"
											)}
										>
											THE ROOT NETWORK <sup className="text-red-500">alpha</sup>
										</span>
									</Link>
								</div>
								<div className="hidden sm:ml-[1rem] sm:flex sm:space-x-[1rem]">
									{links.map((link, key) => (
										<Fragment key={key}>
											<span
												className={clsx(
													`inline-flex select-none items-center text-nav font-medium uppercase leading-[23px] tracking-[1.1px] text-white`
												)}
											>
												{"//"}
											</span>
											<Link href={link.href} key={key}>
												<a
													className={clsx(
														`inline-flex items-center text-nav font-medium uppercase leading-[23px] tracking-[1.1px] text-white`,
														router.pathname === link.href && "font-extrabold"
													)}
												>
													{link.title}
												</a>
											</Link>
										</Fragment>
									))}

									{/* border-indigo-500 to set active state */}
								</div>
							</div>
							<div className="flex flex-shrink-0 items-center space-x-3 text-white">
								<span
									className={clsx(
										"inline-block h-5 whitespace-nowrap py-1 px-2 text-center align-baseline text-xs font-extrabold uppercase leading-none text-black",
										IS_MAINNET ? "bg-lime-700" : "bg-white"
									)}
								>
									{IS_MAINNET ? "Mainnet" : "Testnet"}
								</span>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="divide-y divide-gray-400">
							{links.map((link, key) => (
								<Link href={link.href} key={key}>
									<Disclosure.Button
										onClick={close}
										className="my-auto block w-full bg-transparent py-2 text-base font-medium text-gray-300"
									>
										{link.title}
									</Disclosure.Button>
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
