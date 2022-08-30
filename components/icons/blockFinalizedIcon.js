import {
  CubeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function BlockFinalizedIcon() {
  return (
    <>
      <CheckCircleIcon
        data-tip
        data-for="finalizedIcon"
        className="h-5 my-auto text-green-700"
      />
    </>
  );
}
