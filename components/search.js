import clsx from "clsx";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { RefetchIndicator } from "@/components";

export default function Search() {
	const { search, setSearch, isSearching, error, onFormSubmit } = useSearch();

	return (
		<div className="">
			<form
				onSubmit={onFormSubmit}
				className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"
			>
				<fieldset className="flex flex-row justify-between rounded-md ">
					<div className="w-full">
						<input
							value={search}
							type="text"
							onChange={(e) => setSearch(e.target.value)}
							onKeyDown={(e) => {
								if (e.key == "Enter") {
									onFormSubmit(e);
								}
							}}
							className="block h-10 w-full border-l border-t border-b border-gray-400 bg-transparent p-3 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Search by Block / Account / Extrinsic ID / Transaction Hash"
						/>
					</div>
					<div>
						<button
							type="submit"
							className={clsx(
								"inline-flex h-10 items-center border border-indigo-500 bg-transparent px-6 py-1.5 text-xs font-bold text-indigo-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
								isSearching &&
									"cursor-not-allowed bg-transparent hover:bg-transparent"
							)}
						>
							{isSearching ? (
								<RefetchIndicator iconClassName="mx-3" />
							) : (
								"Search"
							)}
						</button>
					</div>
				</fieldset>
				{error && (
					<div className="mt-2 select-none text-sm text-red-400">{error}</div>
				)}
			</form>
		</div>
	);
}

const useSearch = () => {
	const router = useRouter();

	const [search, setSearch] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const [error, setError] = useState(undefined);

	useEffect(() => {
		if (error) {
			setError(undefined);
		}
	}, [router?.pathname]);

	const getSearchURL = (search) => {
		if (ethers.utils.isAddress(search)) return `/account/${search}`;

		// BLOCK NUMBER
		if (
			Number(search) >= 0 &&
			new RegExp("^[0-9]+$").test(search) &&
			Number(search) <= Number.MAX_SAFE_INTEGER
		) {
			return `/block/${search}`;
		}

		// EXTRINSIC HASH OR EXTRINSIC ID
		if (search.split("-")?.length == 3) {
			return `/extrinsic/${search}`;
		}
	};

	const onFormSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			if (isSearching) return;
			if (search == "") return;

			setError("");
			setIsSearching(true);

			const to = getSearchURL(search.trim());
			setIsSearching(false);

			if (!to) {
				setError("Invalid search parameter");
				return setSearch("");
			}

			setSearch("");

			return router.replace(to);
		},
		[search, isSearching, router]
	);

	return { search, setSearch, isSearching, error, onFormSubmit };
};
