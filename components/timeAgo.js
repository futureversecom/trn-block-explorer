import clsx from "clsx";
import { useAtom } from "jotai";
import { useMemo } from "react";

import { ticker } from "@/libs/stores";
import { formatTimeAgo } from "@/libs/utils";

export const TimeAgo = ({ timestamp, timeAgoClassName }) => {
	const [tick] = useAtom(ticker);
	const formattedTimeAgo = useMemo(
		() => formatTimeAgo(new Date(timestamp)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[tick, timestamp]
	);
	return <span className={clsx(timeAgoClassName)}>{formattedTimeAgo}</span>;
};
