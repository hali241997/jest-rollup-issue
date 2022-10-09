import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GadaProvider } from "@issue/web-core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GadaProvider>
      <Component {...pageProps} />
    </GadaProvider>
  );
}

export default MyApp;
