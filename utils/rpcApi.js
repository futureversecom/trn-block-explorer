import { ApiPromise, WsProvider } from "@polkadot/api";
import * as networkSwitcher from "./networkSwitcherUtils";

let wsProvider;
let api;

export const retrieveAndUpdateProvider = async () => {
  wsProvider = new WsProvider(networkSwitcher.getActiveRPCUrl());
  api = await ApiPromise.create({ provider: wsProvider });
};

export const getHeader = async () => {
  if (!api?.isReady) await retrieveAndUpdateProvider();
  return lastHeader;
};
