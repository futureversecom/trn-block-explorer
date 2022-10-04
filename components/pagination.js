import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback, useMemo } from "react";

import { usePagination } from "@/libs/stores";

export const Pagination = ({ table }) => {
	const { pages, currentPage } = usePagination(table);
	const { prevPages, postPages, onPageClick } = usePages(table);

	return (
		<div className="mt-2 w-full overflow-scroll sm:relative sm:overflow-visible">
			<div className="right-0 flex space-x-2 sm:absolute">
				{/* Go to first page */}
				<PaginationButton
					onClick={() => onPageClick(1, currentPage === 1)}
					buttonClassName={clsx(
						currentPage === 1
							? "cursor-not-allowed text-white"
							: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
					)}
				>
					<ChevronDoubleLeftIcon className="h-4 w-4" />
				</PaginationButton>

				{/* Go to previous page */}
				<PaginationButton
					onClick={() => onPageClick(currentPage - 1, currentPage === 1)}
					buttonClassName={clsx(
						currentPage === 1
							? "cursor-not-allowed text-white"
							: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
					)}
				>
					<ChevronLeftIcon className="h-4 w-4" />
				</PaginationButton>

				{/* Pages before current page */}
				{currentPage > 1 && (
					<>
						{prevPages.map((page, i) => (
							<PaginationButton
								key={i}
								onClick={() => onPageClick(page, currentPage === page)}
								buttonClassName={clsx(
									"font-mono text-sm text-indigo-500",
									currentPage === page
										? "cursor-default !border-white !text-white hover:text-white text-white"
										: "text-indigo-300 !border-indigo-500 hover:text-indigo-500 hover:bg-indigo-700"
								)}
							>
								{page}
							</PaginationButton>
						))}
					</>
				)}

				{/* Pages after & including current page */}
				{postPages.map((_, i) => {
					const page = i + currentPage;

					if (page > pages.length + 1) return;

					return (
						<PaginationButton
							key={i}
							onClick={() => onPageClick(page, currentPage === page)}
							buttonClassName={clsx(
								"font-mono text-sm",
								currentPage === page
									? "cursor-default !border-white hover:text-white text-white"
									: "text-indigo-300 !border-indigo-500 hover:text-indigo-500 hover:bg-indigo-700"
							)}
						>
							{page}
						</PaginationButton>
					);
				})}

				{/* Go to next page */}
				<PaginationButton
					onClick={() =>
						onPageClick(currentPage + 1, currentPage === pages.length)
					}
					buttonClassName={clsx(
						currentPage === pages.length
							? "cursor-not-allowed text-white"
							: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
					)}
				>
					<ChevronRightIcon className="h-4 w-4" />
				</PaginationButton>

				{/* Go to last page */}
				<PaginationButton
					onClick={() =>
						onPageClick(pages.length, currentPage === pages.length)
					}
					buttonClassName={clsx(
						currentPage === pages.length
							? "cursor-not-allowed text-white"
							: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
					)}
				>
					<ChevronDoubleRightIcon className="h-4 w-4" />
				</PaginationButton>
			</div>
		</div>
	);
};

const usePages = (table) => {
	const { pages, currentPage, setCurrentPage } = usePagination(table);

	const onPageClick = (page, condition) => {
		if (condition) return;

		setCurrentPage(page);
	};

	const getPrevPages = useCallback(
		(amount) => {
			const pages = [];
			for (let i = amount; i >= 1; i--) {
				if (currentPage - i <= 0) continue;
				pages.push(currentPage - i);
			}

			return pages;
		},
		[currentPage]
	);

	const { pageSlice, prevPages } = useMemo(() => {
		let pageSlice = 0,
			prevPages = [];

		switch (currentPage) {
			case 1: {
				pageSlice = currentPage + 5;
				break;
			}
			case 2: {
				prevPages = getPrevPages(1);
				pageSlice = currentPage + 4;
				break;
			}
			default: {
				prevPages = getPrevPages(2);
				pageSlice = currentPage + 3;
				break;
			}
			case pages.length - 1: {
				prevPages = getPrevPages(3);
				pageSlice = undefined;
				break;
			}
			case pages.length: {
				prevPages = getPrevPages(4);
				pageSlice = undefined;
				break;
			}
		}

		return { pageSlice, prevPages };
	}, [currentPage, getPrevPages, pages.length]);

	const postPages = useMemo(() => {
		if (!pages) return;

		if (currentPage < pages.length - 2 || currentPage > pages.length)
			return pages.slice(currentPage, pageSlice);

		return pages.slice(currentPage, pageSlice).concat(undefined);
	}, [currentPage, pages, pageSlice]);

	return { prevPages, postPages, onPageClick };
};

const PaginationButton = ({ children, buttonClassName, ...props }) => (
	<button
		{...props}
		type="button"
		className={clsx(
			"cursor-pointer border bg-transparent px-2 py-1",
			buttonClassName
		)}
	>
		{children}
	</button>
);
