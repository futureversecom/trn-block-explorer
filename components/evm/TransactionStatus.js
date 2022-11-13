import {
	CheckIcon,
	ClockIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

import EVMTooltip from "@/components/evm/evmTooltip";

export default function TransactionStatus({ tx }) {
	let status;

	if (tx?.status == 1 && tx?.blockNumber) {
		status = 1;
	}

	if (tx?.status == 0 && tx?.blockNumber) {
		status = 2;
	}

	if (!tx?.blockNumber) {
		status = 0;
	}

	// 0 = pending
	// 1 = confirmed
	// 2 = error;

	const iconClass = "h-4 w-4";

	return (
		<Fragment>
			{status == 0 && (
				<EVMTooltip message="This transaction is waiting to be mined.">
					<span className="select-none inline-flex items-center rounded bg-gray-100 px-1 space-x-1 py-0.5 text-xs font-medium text-gray-800">
						<ClockIcon className={iconClass} />
						<div>Pending</div>
					</span>
				</EVMTooltip>
			)}
			{status == 1 && (
				<EVMTooltip message="This transaction was successfully mined in a block.">
					<span className="select-none inline-flex items-center rounded bg-green-100 px-1 space-x-1  py-0.5 text-xs font-medium text-green-800">
						<CheckIcon className={iconClass} />
						<div>Success</div>
					</span>
				</EVMTooltip>
			)}
			{status == 2 && (
				<EVMTooltip message="This transaction was reverted.">
					<span className="select-none inline-flex items-center rounded bg-red-100 px-1 space-x-1 py-0.5 text-xs font-medium text-red-800">
						<ExclamationCircleIcon className={iconClass} />
						<div>Reverted</div>
					</span>
				</EVMTooltip>
			)}
		</Fragment>
	);
}
