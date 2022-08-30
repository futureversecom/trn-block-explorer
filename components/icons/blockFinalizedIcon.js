import {
    CubeIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
  } from "@heroicons/react/24/outline";
  import ReactTooltip from "react-tooltip";

export default function BlockFinalizedIcon() {
  return (
    <>
      <CheckCircleIcon
        data-tip
        data-for="finalizedIcon"
        className="h-5 my-auto text-green-700"
      />
      <ReactTooltip id="finalizedIcon" place="top" type="dark" effect="solid">
        <span>Finalized</span>
      </ReactTooltip>
    </>
  );
}
