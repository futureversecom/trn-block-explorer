import {
	GetBlockHeightFromHashDocument,
	GetTransferByHashDocument,
	GetBlockDocument,
} from "@/libs/api/generated";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { graphQLClient } from "@/libs/client";

export default function Search() {
	const { search, setSearch, error, onFormSubmit } = useSearch();

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
							placeholder="Search by Block / Account / Transaction Hash"
						/>
					</div>
					<div>
						<button
							type="submit"
							className="inline-flex h-12 items-center rounded-r border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Search
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
	};

	const onFormSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			if (!search) return;
			setError("");

			const to = await getSearchURL(search.trim());

			if (!to) {
				setError("Invalid search parameter");
				return setSearch("");
			}

			return router.push(to);
		},
		[search, router]
	);

	return { search, setSearch, error, onFormSubmit };
};
