import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Head from "next/head";
import { WsProvider, ApiPromise } from "@polkadot/api";

import { Footer, Header, Search } from "@/components";
import { queryClient, PolkadotContext } from "@/libs/client";
import { ROOT_WS_ENDPOINT } from "@/libs/constants";
import "@/styles/globals.css";

import { usePageTracking } from "../libs/hooks";

const provider = new WsProvider(ROOT_WS_ENDPOINT);

function MyApp({ Component, pageProps }) {
	const [ polkadotAPI, setPolkadotAPI ] = useState(null);

	usePageTracking();

	useEffect(() => {
		// connect to the polkadotjs API provider only once
		const getAPI = async () => {
			// Await for the isReady promise to ensure the API has connected 
			// to the node and completed the initialization process
			const api = await ApiPromise.create({ provider });
			setPolkadotAPI(api);
		};

		if (!polkadotAPI) {
			getAPI();
		}
	}, [ polkadotAPI ]);

	return (
		<QueryClientProvider client={queryClient}>
			<PolkadotContext.Provider value={polkadotAPI}>
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
			</PolkadotContext.Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
