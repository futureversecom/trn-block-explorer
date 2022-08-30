import "../styles/globals.css";
import Header from "../components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "../components/search";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen bg-[#fbfbfd]">
        <Header />
        <Search />
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
