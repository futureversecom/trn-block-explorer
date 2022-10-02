import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import { usePagination } from "@/libs/stores";

export const Pagination = ({ table }) => {
	const { pages, currentPage, setCurrentPage } = usePagination(table);

	const onPageClick = (page, condition) => {
		if (condition) return;

		setCurrentPage(page);
	};

	let pageSlice = 0,
		prevPages = [];

	switch (currentPage) {
		case 1: {
			pageSlice = currentPage + 5;
			break;
		}
		case 2: {
			prevPages = [1];
			pageSlice = currentPage + 4;
			break;
		}
		case pages.length:
		case pages.length - 1:
		case pages.length - 2: {
			let lastPages = [];
			for (let i = 4; i >= 0; i--) {
				if (currentPage - i <= 0) continue;
				lastPages.push(currentPage - i);
			}
			prevPages = lastPages;
			break;
		}
		default: {
			prevPages = [currentPage - 2, currentPage - 1];
			pageSlice = currentPage + 3;
			break;
		}
	}

	return (
		<div className="relative mt-2 w-full">
			<div className="absolute right-0 flex space-x-2">
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
				{pages.slice(currentPage, pageSlice).map((_, i) => {
					const page = i + currentPage;

					if (page > pages.length) return;

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
