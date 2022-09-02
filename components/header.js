import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import chains from "../utils/chains.json";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getActiveChainName,
  setActiveChain,
} from "../utils/networkSwitcherUtils";

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
    title: "Transfers",
    href: "/transfers",
  },
  {
    title: "Accounts",
    href: "/accounts",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12">
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
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <span className="my-auto font-bold cursor-pointer">
                      ROOT NETWORK.
                    </span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {links.map((link, key) => (
                    <Link href={link.href} key={key}>
                      <a
                        key={key}
                        className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-gray-900 ${
                          router.pathname === link.href && "border-indigo-500"
                        }`}
                      >
                        {link.title}
                      </a>
                    </Link>
                  ))}

                  {/* border-indigo-500 to set active state */}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <span suppressHydrationWarning={true}>
                          {getActiveChainName()}
                        </span>
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
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
                      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {chains.map((chain, key) => (
                            <Menu.Item key={key}>
                              {({ active }) => (
                                <div
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                  onClick={() => {
                                    setActiveChain(chain.id);
                                    window.location.reload();
                                  }}
                                >
                                  {chain.chainName}
                                </div>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
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
