import {
	CheckCircleIcon,
	ClockIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { Tooltip } from "@/components";

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
				<Tooltip message={"This transaction is waiting to be mined."}>
					<ClockIcon className="my-auto h-5 text-orange-400" />
				</Tooltip>
			)}
			{status == 1 && (
				<Tooltip
					message={"This transaction was successfully mined in a block."}
				>
					<CheckCircleIcon className="my-auto h-5 text-green-700" />
				</Tooltip>
			)}
			{status == 2 && (
				<Tooltip message={"This transaction was reverted."}>
					<ExclamationCircleIcon className="my-auto h-5 text-red-500" />
				</Tooltip>
			)}
		</Fragment>
	);
}
