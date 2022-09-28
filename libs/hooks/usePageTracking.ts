import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga";

export const usePageTracking = () => {
	const router = useRouter();

	let code = "UA-243394521-2";
	if (typeof window !== "undefined") {
		if (window?.location?.host.includes("localhost")) {
			code = "UA-243394521-1";
		}
	}

	useEffect(() => {
		ReactGA.initialize(code);
		ReactGA.pageview(router.pathname);
	}, [router]);
};
