import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function BlockFinalizedIcon({ status }) {
  if (status == true) {
    return <CheckCircleIcon className="h-5 my-auto text-green-700" />;
  } else {
    return <ExclamationCircleIcon className="h-5 my-auto text-red-700" />;
  }
}
