import { atom, useAtom } from "jotai";

import { useInterval } from "@/libs/hooks";

const ticker = atom(new Date());

const tickerAtom = atom(
	(get) => get(ticker),
	(get, set, newValue: Date) => {
		set(ticker, newValue);
	}
);

export const useTickerAtom = () => {
	const [tick, setTick] = useAtom(tickerAtom);

	useInterval(() => {
		setTick(new Date(tick.setSeconds(tick.getSeconds() + 1)));
	}, 1000);

	return tick;
};
