import { atom, useAtom } from "jotai";

import { useInterval } from "@/libs/hooks";

export const ticker = atom(new Date());

const tickerAtom = atom(null, (get, set, newValue: Date) => {
	set(ticker, newValue);
});

export const useTimeTicker = () => {
	const [_, setTick] = useAtom(tickerAtom);

	useInterval(() => {
		setTick(new Date());
	}, 1000);
};
