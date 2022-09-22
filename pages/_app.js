import { QueryClientProvider } from "@tanstack/react-query";

import { Footer, Header, Search } from "@/components";
import { queryClient } from "@/libs/client";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="h-full min-h-screen bg-[#fbfbfd]">
				<Header />
				<Search />
				<Component {...pageProps} />
				<Footer />
			</div>
		</QueryClientProvider>
	);
}

export default MyApp;
