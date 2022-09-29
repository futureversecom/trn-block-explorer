import { QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

import { Footer, Header, Search } from "@/components";
import { queryClient } from "@/libs/client";
import "@/styles/globals.css";

import { usePageTracking } from "../libs/hooks";

function MyApp({ Component, pageProps }) {
	usePageTracking();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="h-full min-h-screen bg-[#111]">
				<Head>
					<title>The Root Network Block Explorer</title>
					<meta
						name="description"
						content="Explore and search blocks, extrinsics and accounts on The Root Network."
					/>
					<link rel="apple-touch-icon" sizes="256x256" href="/favicon_big" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
				</Head>
				<Header />
				<Search />
				<Component {...pageProps} />
				<Footer />
			</div>
		</QueryClientProvider>
	);
}

export default MyApp;
