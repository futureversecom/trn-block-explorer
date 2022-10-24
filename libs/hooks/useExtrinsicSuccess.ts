import { useMemo } from "react";

interface Extrinsic {
	success?: boolean;
	events: Array<{
		__typename?: "archive_event";
		id?: any;
		name: string;
		phase?: string;
		pos?: number;
		index_in_block?: number;
		args?: any | null;
	}>;
}

export const useExtrinsicSuccess = (extrinsic: Extrinsic) => {
	const isSudo = useMemo(() => {
		const sudoEventIdx = extrinsic?.events?.findIndex((event) =>
			event.name.includes("Sudo.Sudid")
		);
		return sudoEventIdx !== -1;
	}, [extrinsic]);

	return useMemo(() => {
		if (!isSudo) return extrinsic?.success;

		const sudoEvent = extrinsic?.events?.find((event) =>
			event.name.includes("Sudo.Sudid")
		);
		return sudoEvent?.args?.sudoResult?.__kind !== "Err";
	}, [isSudo, extrinsic]);
};
