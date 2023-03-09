import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback } from "react";

import { usePagination } from "@/libs/stores";

import { PaginationButton, RefetchIndicator } from "./";

export const PaginationFallback = ({ table }) => {
	const { currentPage, setCurrentPage } = usePagination(table);

	const onPageClick = useCallback(
		(page, condition) => {
			if (condition) return;

			setCurrentPage(page);
		},
		[setCurrentPage]
	);

	return (
		<div className="mt-2 w-full overflow-scroll sm:relative sm:overflow-visible">
			<div className="right-0 flex space-x-2 sm:absolute">
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

				<RefetchIndicator />

				{/* Go to next page */}
				<PaginationButton
					onClick={() => onPageClick(currentPage + 1)}
					buttonClassName="text-indigo-300 hover:bg-indigo-500 border-indigo-500"
				>
					<ChevronRightIcon className="h-4 w-4" />
				</PaginationButton>
			</div>
		</div>
	);
};
