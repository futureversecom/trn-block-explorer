import { useRouter } from "next/router";
import { ethers } from "ethers";
import { useState } from "react";
export default function Search() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(undefined);
  const router = useRouter();
  const doSearch = () => {
    let to = undefined;
    // if its an address
    if (ethers.utils.isAddress(search)) {
      to = `/account/${search}`;
    }
    // if its an tx hash
    if (search.length === 66) {
      to = `/transfer/${search}`;
    }
    // if its a block
    if (Number(search) || search >= 0) {
      to = `/block/${search}`;
    }

    if (search && to) {
      if (error) {
        setSearch("");
        setError(undefined);
      }
      return router.push(to);
    } else {
      setSearch("");
      setError("Invalid search parameter");
    }
  };
  return (
    <div className="border-b border-b-gray-200 bg-white">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between rounded-md border border-gray-300">
          <div className="w-full">
            <input
              value={search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="block h-12 w-full rounded-l border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search by Block / Account / Transaction Hash"
            />
          </div>
          <div>
            <button
              onClick={() => {
                doSearch();
              }}
              type="button"
              className="inline-flex h-12 items-center rounded-r border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
        <div className="select-none py-3 text-sm text-red-400">{error}</div>
      </div>
    </div>
  );
}
