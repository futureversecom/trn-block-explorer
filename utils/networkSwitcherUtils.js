import chains from "./chains.json";
import { setCookie, getCookie } from "cookies-next";

const cookieKey = "currentChain";

export const getCurrentActiveChain = () => {
  const val = getCookie("currentChain");
  if (!val) {
    return 0;
  } else {
    return val;
  }
};

export const setActiveChain = (id) => {
  setCookie(cookieKey, id);
};

export const getActiveChainName = () => {
  return chains[getCurrentActiveChain()].chainName;
};

export const getActiveGraphQLUrl = () => {
  return chains[getCurrentActiveChain()].graphQlUri;
};

export const getCurrentNativeCurrencyName = () => {
  return chains[getCurrentActiveChain()].currencyName;
};

export const getActiveRPCUrl = () => {
  return chains[getCurrentActiveChain()].rpcUrl;
};

export const getActiveChainDecimals = () => {
  return chains[getCurrentActiveChain()].decimals;
};
