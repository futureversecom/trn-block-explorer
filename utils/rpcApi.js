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
  const addr = "0x7B2d50cd8328C53c9279571F5F860883030Dc804";
  await api.query.system.account(addr, ({ nonce, data: balance }) => {
    console.log(
      `free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`
    );
  });

  const lastHeader = await api.rpc.chain.getHeader();

  return lastHeader;
};
