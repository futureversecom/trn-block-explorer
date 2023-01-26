import clsx from "clsx";

import EVMToolTip from "@/components/evm/evmTooltip";

const Container = ({ children, containerClassName }) => (
	<div
		className={clsx(
			"mt-0 overflow-hidden border border-gray-400 bg-transparent",
			containerClassName
		)}
	>
		<div className="px-4 py-5 sm:p-0">
			<dl className="sm:divide-y sm:divide-gray-800">{children}</dl>
		</div>
	</div>
);

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

const Title = ({ title, titleClassName, helpTooltip }) => (
	<dt
		className={clsx(
			"text-sm font-medium text-white flex items-center space-x-2",
			titleClassName
		)}
	>
		<div>{title}</div>
		{helpTooltip ? (
			<div>
				<EVMToolTip message={helpTooltip} />
			</div>
		) : null}
	</dt>
);

const Data = ({ children, dataClassName }) => (
	<dd
		className={clsx(
			"mt-1 text-sm text-white sm:col-span-2 sm:mt-0",
			dataClassName
		)}
	>
		{children}
	</dd>
);

export const DetailsLayout = {
	Container,
	Wrapper,
	Title,
	Data,
};
