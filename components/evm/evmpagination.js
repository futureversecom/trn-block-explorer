import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback, useMemo } from "react";

export default function EVMPagination({ data, onPageChange }) {
	const { prevPages, postPages } = usePages(data);

	return (
		<div className="flex justify-end py-3 text-sm">
			<div className="mt-2 w-full overflow-scroll sm:relative sm:overflow-visible">
				<div className="right-0 flex space-x-2 sm:absolute">
					{/* Go to first page */}
					<PaginationButton
						onClick={() => onPageChange(1)}
						buttonClassName={clsx(
							data?.page === 1
								? "cursor-not-allowed text-white"
								: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
						)}
						disabled={data?.page === 1}
					>
						<ChevronDoubleLeftIcon className="h-4 w-4" />
					</PaginationButton>

					{/* Go to previous page */}
					<PaginationButton
						onClick={() => onPageChange(data?.prevPage)}
						buttonClassName={clsx(
							data?.page === 1
								? "cursor-not-allowed text-white"
								: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
						)}
						disabled={!data?.hasPrevPage}
					>
						<ChevronLeftIcon className="h-4 w-4" />
					</PaginationButton>

					{/* Pages before current page */}
					{data?.page > 1 && (
						<>
							{prevPages.map((page, i) => (
								<PaginationButton
									key={i}
									onClick={() => onPageChange(page)}
									buttonClassName={clsx(
										"font-mono text-sm text-indigo-500",
										data?.page === page
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
						if (!data?.page) return null;

						const page = i + data?.page;

						if (page > data?.totalPages + 1) return;

						return (
							<PaginationButton
								key={i}
								onClick={() => onPageChange(page)}
								buttonClassName={clsx(
									"font-mono text-sm",
									data?.page === page
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
						onClick={() => onPageChange(data?.nextPage)}
						buttonClassName={clsx(
							!data?.hasNextPage
								? "cursor-not-allowed text-white"
								: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
						)}
						disabled={!data?.hasNextPage}
					>
						<ChevronRightIcon className="h-4 w-4" />
					</PaginationButton>

					{/* Go to last page */}
					<PaginationButton
						onClick={() => onPageChange(data?.totalPages)}
						buttonClassName={clsx(
							!data?.hasNextPage
								? "cursor-not-allowed text-white"
								: "text-indigo-300 hover:bg-indigo-500 border-indigo-500"
						)}
						disabled={data?.page === data?.totalPages}
					>
						<ChevronDoubleRightIcon className="h-4 w-4" />
					</PaginationButton>
				</div>
			</div>
		</div>
	);
}

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

const usePages = (data) => {
	const getPrevPages = useCallback(
		(amount) => {
			const prevPages = [];
			for (let i = amount; i >= 1; i--) {
				if (data?.page - i <= 0) continue;
				prevPages.push(data?.page - i);
			}

			return prevPages;
		},
		[data?.page]
	);

	const { prevPages, postPagesLen } = useMemo(() => {
		let pageSlice = 0,
			prevPages = [],
			postPagesLen = 0;

		switch (data?.page) {
			case 1: {
				postPagesLen = 5;
				pageSlice = data?.page + postPagesLen;
				break;
			}
			case 2: {
				postPagesLen = 4;
				prevPages = getPrevPages(1);
				pageSlice = data?.page + postPagesLen;
				break;
			}
			default: {
				postPagesLen = 3;
				prevPages = getPrevPages(2);
				pageSlice = data?.page + postPagesLen;
				break;
			}
			case data?.totalPages - 2: {
				postPagesLen = 2;
				prevPages = getPrevPages(2);
				pageSlice = data?.page + postPagesLen;
				break;
			}
			case data?.totalPages - 1: {
				postPagesLen = 1;
				prevPages = getPrevPages(3);
				pageSlice = data?.page + postPagesLen;
				break;
			}
			case data?.totalPages: {
				prevPages = getPrevPages(4);
				pageSlice = undefined;
				break;
			}
		}

		return { pageSlice, prevPages, postPagesLen };
	}, [data?.page, data?.totalPages, getPrevPages]);

	const postPages = useMemo(() => {
		if (data?.page < data?.totalPages - 2 || data?.page > data?.totalPages) {
			return Array.from({ length: postPagesLen }, (_, index) => index + 1);
		}

		return Array.from({ length: postPagesLen }, (_, index) => index + 1).concat(
			undefined
		);
	}, [data, postPagesLen]);

	return { prevPages, postPages };
};
