import clsx from "clsx";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  FireIcon,
  PrinterIcon,
} from "@heroicons/react/24/outline";

export default function TransferStatusIcon({ iconClassName, status }) {
  switch (status) {
    case "BURNED":
      return (
        <FireIcon className={clsx("my-auto text-orange-700", iconClassName)} />
      );
    case "ISSUED":
      return (
        <PrinterIcon className={clsx("my-auto text-gray-700", iconClassName)} />
      );
    case "TRANSFERRED":
      return (
        <CheckCircleIcon
          className={clsx("my-auto text-green-700", iconClassName)}
        />
      );
    default:
      return (
        <ExclamationCircleIcon
          className={clsx("my-auto text-red-700", iconClassName)}
        />
      );
  }
};
