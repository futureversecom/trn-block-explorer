import { ApiPromise, WsProvider } from "@polkadot/api";
import { atom, useAtom } from "jotai";

import { ROOT_NETWORK } from "@/libs/constants";

export const getRootApi = async () => {
	const rootApi = await ApiPromise.create({
		provider: new WsProvider(ROOT_NETWORK.ApiUrl.InWebSocket),
	});
	// Await for the isReady promise to ensure the API has connected
	// to the node and completed the initialization process
	await rootApi.isReady;

	return rootApi;
};

const rootApiAtom = atom(async () => await getRootApi());

export const useRootApi = () => {
	const [rootApi] = useAtom(rootApiAtom);

	return rootApi;
};
