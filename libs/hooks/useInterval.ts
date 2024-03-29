import { useEffect, useRef } from "react";

export const useInterval = (callback: any, delay: number) => {
	const savedCallback = useRef<any>(null);

	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};
