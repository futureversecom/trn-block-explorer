import clsx from "clsx";

export const PaginationButton = ({ children, buttonClassName, ...props }) => (
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
