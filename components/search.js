import clsx from "clsx";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

import { RefetchIndicator } from "@/components";
import {
	GetBlockDocument,
	GetBlockHeightFromHashDocument,
	GetExtrinsicByRegexDocument,
	GetTransferByHashDocument,
} from "@/libs/api/generated";
import { graphQLClient } from "@/libs/client";

export default function Search() {
	const { search, setSearch, isSearching, error, onFormSubmit } = useSearch();

	return (
		<div className="border-b border-b-gray-200 bg-white">
			<form
				onSubmit={onFormSubmit}
				className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8"
			>
				<fieldset className="flex flex-row justify-between rounded-md border border-gray-300">
					<div className="w-full">
						<input
							value={search}
							type="text"
							onChange={(e) => setSearch(e.target.value)}
							className="block h-12 w-full rounded-l border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Search by Block / Account / Extrinsic ID / Transaction Hash"
						/>
					</div>
					<div>
						<button
							type="submit"
							className={clsx(
								"inline-flex h-12 items-center rounded-r border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
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
				<div className="select-none py-3 text-sm text-red-400">{error}</div>
			</form>
		</div>
	);
}

const useSearch = () => {
	const router = useRouter();

	const [search, setSearch] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const [error, setError] = useState(undefined);

	const getSearchURL = async (search) => {
		if (ethers.utils.isAddress(search)) return `/account/${search}`;

		let response;
		if (search.length === 66) {
			response = await graphQLClient.request(GetBlockHeightFromHashDocument, {
				blockHash: search,
			});

			if (response?.archive?.block?.length)
				return `/block/${response.archive.block[0].height}`;

			response = await graphQLClient.request(GetTransferByHashDocument, {
				hash: search,
			});

			if (!response?.transfers?.transfers?.length) return;
			return `/transfer/${search}`;
		}

		if (Number(search) && search >= 0) {
			response = await graphQLClient.request(GetBlockDocument, {
				height: search,
			});

			if (!response?.archive?.block?.length) return;
			return `/block/${search}`;
		}

		if (search.includes("-")) {
			const [blockNumber, extrinsicId] = search.split("-");
			response = await graphQLClient.request(GetExtrinsicByRegexDocument, {
				regex: `0+${blockNumber}-0+${extrinsicId}`,
			});

			if (!response?.archive?.extrinsic?.length) return;
			return `/extrinsic/${response.archive.extrinsic[0].id}`;
		}
	};

	const onFormSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			if (!search || isSearching) return;
			setError("");
			setIsSearching(true);

			const to = await getSearchURL(search.trim());
			setIsSearching(false);

			if (!to) {
				setError("Invalid search parameter");
				return setSearch("");
			}

			return router.replace(to);
		},
		[search, isSearching, router]
	);

	return { search, setSearch, isSearching, error, onFormSubmit };
};
