import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@/components";

export default function BlockFinalizedIcon({ status }) {
	if (status == true) {
		return (
			<Tooltip message="Finalized">
				<CheckCircleIcon className="my-auto h-5 text-green-700" />
			</Tooltip>
		);
	} else {
		return (
			<Tooltip message="Unfinalized">
				<ExclamationCircleIcon className="my-auto h-5 text-orange-400" />
			</Tooltip>
		);
	}
}
