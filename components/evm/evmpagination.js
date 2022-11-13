import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function EVMPagination({ data }) {
	console.log(query?.data)
	return (
		<div className="flex justify-between py-3 text-sm">
			<div className="my-auto text-white">Show X Records</div>
			<div>
				<div className="flex divide-x border">
					<PaginationBadge
						onPress={() => {
							console.log(`firs`);
						}}
					>
						First
					</PaginationBadge>
					<PaginationBadge>
						<ChevronLeftIcon className="h-5 w-5" />
					</PaginationBadge>
					<PaginationBadge>Page 1 of 16</PaginationBadge>
					<PaginationBadge>
						<ChevronRightIcon className="h-5 w-5" />
					</PaginationBadge>
					<PaginationBadge>Last</PaginationBadge>
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
