import { Fragment } from "react";

export default function TransactionStatus({tx}) {
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

	return (
		<Fragment>
			{status == 0 && (
				<span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
					⬤ Pending
				</span>
			)}
			{status == 1 && (
				<span className="inline-flex items-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
					Success
				</span>
			)}
			{status == 2 && (
				<span className="inline-flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
					Reverted
				</span>
			)}
		</Fragment>
	);
}
