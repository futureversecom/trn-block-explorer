import { useMemo } from "react";

import { formatTimeAgo } from "@/libs/utils";

export const useTimeAgo = (timestamp: string, tick: Date): string => {
	return useMemo(() => formatTimeAgo(new Date(timestamp)), [tick, timestamp]);
};
