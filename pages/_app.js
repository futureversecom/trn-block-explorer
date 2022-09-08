import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Search, Header, Footer } from "@/components";
import { queryClient } from "@/libs/client";

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
