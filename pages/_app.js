import "../styles/globals.css";
import Header from "./component/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
