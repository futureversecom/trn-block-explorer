import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

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
];

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
                  <span className="my-auto font-bold">ROOT NETWORK.</span>
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
