import { atom, useAtom } from "jotai";
import { useEffect } from "react";

interface RefetchStatus {
	accountTransfers: boolean;
	accountEvmTransactions: boolean;
}

const refetchingAtom = atom<RefetchStatus>({
	accountTransfers: false,
	accountEvmTransactions: false,
});

type RefetchKey = "accountTransfers" | "accountEvmTransactions";

interface StatusUpdate {
	key: RefetchKey;
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

export const useAccountRefetchStatus = (key: RefetchKey, status?: boolean) => {
	const [{ accountEvmTransactions, accountTransfers }, setRefetchStatus] =
		useAtom(refetchStatusAtom);

	useEffect(() => {
		if (!key) return;

		setRefetchStatus({ key, status: status ?? false });
	}, [status, setRefetchStatus]);

	return accountEvmTransactions || accountTransfers;
};
