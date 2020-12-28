import "../styles/globals.css";
import Ascii from "../components/ascii";

function MyApp({ Component, pageProps }) {
  console.error(Ascii());
  return <Component {...pageProps} />;
}

export default MyApp;
