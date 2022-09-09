import clsx from "clsx";

const Wrapper = ({ children, wrapperClassName }) => (
	<div
		className={clsx(
			"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6",
			wrapperClassName
		)}
	>
		{children}
	</div>
);

const Title = ({ title, titleClassName }) => (
	<dt className={clsx("text-sm font-medium text-gray-900", titleClassName)}>
		{title}
	</dt>
);

const Data = ({ children, dataClassName }) => (
	<dd
		className={clsx(
			"mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0",
			dataClassName
		)}
	>
		{children}
	</dd>
);

export const DetailsLayout = {
	Wrapper,
	Title,
	Data,
};
