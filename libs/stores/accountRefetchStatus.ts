import { atom, useAtom } from "jotai";
import { useEffect } from "react";

interface RefetchStatus {
	ercTransfers: boolean;
	evmTransactions: boolean;
}

const refetchingAtom = atom<RefetchStatus>({
	ercTransfers: false,
	evmTransactions: false,
});

interface StatusUpdate {
	key: string;
	status: boolean;
}

const refetchStatusAtom = atom(
	(get) => get(refetchingAtom),
	(get, set, { key, status }: StatusUpdate) => {
		set(refetchingAtom, {
			...get(refetchingAtom),
			[key]: status,
		});
	}
);

export const useAccountRefetchStatus = (key?: string, status?: boolean) => {
	const [{ evmTransactions, ercTransfers }, setRefetchStatus] =
		useAtom(refetchStatusAtom);

	useEffect(() => {
		if (!key) return;

		setRefetchStatus({ key, status: status ?? false });
	}, [status, setRefetchStatus]);

	return evmTransactions || ercTransfers;
};
