import clsx from "clsx";

const Table = ({ children, wrapperClassName }) => (
	<table
		className={clsx("min-w-full divide-y divide-gray-400", wrapperClassName)}
	>
		{children}
	</table>
);

const HeadItem = ({ text, headItemClassName }) => (
	<th
		scope="col"
		className={clsx(
			"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6",
			headItemClassName
		)}
	>
		{text}
	</th>
);

const Data = ({ children, dataClassName }) => (
	<td
		className={clsx(
			"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6",
			dataClassName
		)}
	>
		{children}
	</td>
);

export const TableLayout = {
	Table,
	HeadItem,
	Data,
};
