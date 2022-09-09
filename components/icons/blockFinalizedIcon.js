import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function BlockFinalizedIcon({ status }) {
	if (status == true) {
		return <CheckCircleIcon className="my-auto h-5 text-green-700" />;
	} else {
		return <ExclamationCircleIcon className="my-auto h-5 text-red-700" />;
	}
}
