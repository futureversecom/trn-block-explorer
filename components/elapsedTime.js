import moment from "moment";

import { TimeAgo } from "@/components";
import { useTimeTicker } from "@/libs/stores";

export default function ElapsedTime({ timestamp }) {
	useTimeTicker();

	return (
		<div>
			{moment(timestamp).format("LLL")}{" "}
			<TimeAgo timestamp={timestamp} timeAgoClassName="ml-3 text-xs" />
		</div>
	);
}
