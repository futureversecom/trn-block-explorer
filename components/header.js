import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { IS_MAINNET } from "@/libs/constants";

const links = [
	{
		title: "Dashboard",
		href: "/",
	},
	{
		title: "Blocks",
		href: "/blocks",
	},
	{
		title: "Extrinsics",
		href: "/extrinsics",
	},
	{
		title: "Accounts",
		href: "/accounts",
	},
];

export default function Header() {
	const router = useRouter();
	
	return (
		<Disclosure as="nav" className="sm:pt-4">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-10">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center text-white">
									<Link href="/">
										<span className="my-auto cursor-pointer font-gilroy-extrabold text-logo pt-[3px]">
											THE ROOT NETWORK<sup>&nbsp;&#945;</sup>
										</span>
									</Link>
								</div>
								<div className="hidden sm:ml-10 sm:flex sm:space-x-8 uppercase font-gilroy-bold">
									{links.map((link, key) => (
										<Link href={link.href} key={key}>
											<a
												key={key}
												className={clsx(`inline-flex items-center px-1 pt-1 text-sm text-white`, 
												router.pathname === link.href && "border-b-2 border-indigo-500" )}
											>
												{link.title}
											</a>
										</Link>
									))}

									{/* border-indigo-500 to set active state */}
								</div>
							</div>
							<div className="flex flex-shrink-0 items-center text-white">
								<span className={clsx("h-5 text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded",
								IS_MAINNET ? 'bg-lime-700' : 'bg-indigo-700')}>{IS_MAINNET ? 'Mainnet' : 'Testnet'}</span>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 pt-2 pb-4">
							{links.map((link, key) => (
								<Link href={link.href} key={key}>
									<Disclosure.Button className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">
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
