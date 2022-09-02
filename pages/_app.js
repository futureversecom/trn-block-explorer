import "../styles/globals.css";
import Header from "../components/header";
import { QueryClientProvider } from "@tanstack/react-query";
import Search from "../components/search";
import Footer from "../components/footer";
import { queryClient } from "../libs/client";

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
