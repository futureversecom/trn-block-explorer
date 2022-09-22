import clsx from "clsx";
import { usePagination } from "@/libs/stores";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

export const Pagination = ({ table }) => {
	const { pages, currentPage, onPageClick } = usePagination(table);

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
				<PaginationButton
					onClick={() => onPageClick(1)}
					buttonClassName={clsx(
						currentPage === 1
							? "cursor-not-allowed text-gray-300"
							: "hover:text-indigo-500"
					)}
				>
					<ChevronDoubleLeftIcon className="h-4 w-4" />
				</PaginationButton>

				<PaginationButton
					onClick={() => onPageClick(currentPage - 1)}
					buttonClassName={clsx(
						currentPage === 1
							? "cursor-not-allowed text-gray-300"
							: "hover:text-indigo-500"
					)}
				>
					<ChevronLeftIcon className="h-4 w-4" />
				</PaginationButton>

				{currentPage > 1 && (
					<>
						{prevPages.map((page, i) => (
							<PaginationButton
								key={i}
								onClick={() => onPageClick(page)}
								buttonClassName={clsx(
									"font-mono text-sm hover:text-indigo-500",
									currentPage === page &&
										"cursor-default !border-indigo-500 text-indigo-500"
								)}
							>
								{page}
							</PaginationButton>
						))}
					</>
				)}

				{pages.slice(currentPage, pageSlice).map((_, i) => {
					const page = i + currentPage;

					if (page > pages.length) return;

					return (
						<PaginationButton
							key={i}
							onClick={() => onPageClick(page)}
							buttonClassName={clsx(
								"font-mono text-sm hover:text-indigo-500",
								currentPage === page &&
									"cursor-default !border-indigo-500 text-indigo-500"
							)}
						>
							{page}
						</PaginationButton>
					);
				})}

				<PaginationButton
					onClick={() => onPageClick(currentPage + 1)}
					buttonClassName={clsx(
						currentPage === pages.length
							? "cursor-not-allowed text-gray-300"
							: "hover:text-indigo-500"
					)}
				>
					<ChevronRightIcon className="h-4 w-4" />
				</PaginationButton>
				<PaginationButton
					onClick={() => onPageClick(pages.length)}
					buttonClassName={clsx(
						currentPage === pages.length
							? "cursor-not-allowed text-gray-300"
							: "hover:text-indigo-500"
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
			"cursor-pointer rounded border bg-white px-2 py-1 shadow-sm",
			buttonClassName
		)}
	>
		{children}
	</button>
);
