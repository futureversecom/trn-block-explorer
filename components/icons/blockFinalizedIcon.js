import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

import { Tooltip } from "@/components";

export default function BlockFinalizedIcon({
	status,
	iconClassName,
	isExtrinsic = false,
}) {
	const successMessage = !isExtrinsic ? "Finalized" : "Success",
		failedMessage = !isExtrinsic ? "Unfinalized" : "Failed";

	if (status == true) {
		return (
			<Tooltip message={successMessage}>
				<CheckCircleIcon
					className={clsx(iconClassName, "my-auto h-5 text-green-700")}
				/>
			</Tooltip>
		);
	} else {
		return (
			<Tooltip message={failedMessage}>
				<ExclamationCircleIcon
					className={clsx(iconClassName, "my-auto h-5 text-orange-400")}
				/>
			</Tooltip>
		);
	}
}
