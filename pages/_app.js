import { QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Head from "next/head";
import "nprogress/nprogress.css";

import { Footer, Header, Search } from "@/components";
import { queryClient } from "@/libs/client";
import { useRootApi, useTimeTicker } from "@/libs/stores";
import "@/styles/globals.css";

import PageLoader from "../components/pageLoader";
import { usePageTracking } from "../libs/hooks";

// fix for dangerouslySetInnerHTML error on react-tooltip
const ReactTooltip = dynamic(() => import("react-tooltip"), {
	ssr: false,
});

function MyApp({ Component, pageProps }) {
	usePageTracking();
	useRootApi(); // connect to the polkadotjs API provider
	// starts the time ticker atom that provides elapsed time
	// for every component that needs it
	useTimeTicker();

	return (
		<QueryClientProvider client={queryClient}>
			<PageLoader>
				<ReactTooltip />
				<Head>
					<title>The Root Network Block Explorer</title>
					<meta
						name="description"
						content="Explore and search blocks, extrinsics and accounts on The Root Network."
					/>
					<link rel="apple-touch-icon" sizes="256x256" href="/favicon_big" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
				</Head>
				<div className="flex h-full flex-col">
					<Header />
					<Search />
					<div className="flex-1">
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</PageLoader>
		</QueryClientProvider>
	);
}

export default MyApp;
