import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function EVMPagination({ data, onPageChange }) {
	return (
		<div className="flex justify-between py-3 text-sm">
			<div className="my-auto text-white">Show X Records</div>
			<div>
				<div className="flex divide-x border">
					<PaginationBadge
						onPress={() => {
							onPageChange(1);
						}}
						disabled={data?.page === 1}
					>
						First
					</PaginationBadge>
					<PaginationBadge
						disabled={!data?.hasPrevPage}
						onPress={() => {
							onPageChange(data?.prevPage);
						}}
					>
						<ChevronLeftIcon className="h-5 w-5" />
					</PaginationBadge>
					<PaginationBadge>
						Page {data?.page} of {data?.totalPages}
					</PaginationBadge>
					<PaginationBadge
						disabled={!data?.hasNextPage}
						onPress={() => {
							onPageChange(data?.nextPage);
						}}
					>
						<ChevronRightIcon className="h-5 w-5" />
					</PaginationBadge>
					<PaginationBadge
						onPress={() => {
							onPageChange(data?.totalPages);
						}}
						disabled={data?.page === data?.totalPages}
					>
						Last
					</PaginationBadge>
				</div>
			</div>
		</div>
	);
}

const PaginationBadge = ({ children, disabled, onPress }) => {
	return (
		<button
			onClick={onPress}
			className="text-white px-2 py-1 border-white disabled:opacity-50 disabled:cursor-not-allowed"
			disabled={disabled}
		>
			{children}
		</button>
	);
};
