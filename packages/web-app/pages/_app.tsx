import { MyProvider } from "@issue/web-core";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const RootComponent = Component as any;

  return (
    <MyProvider>
      <RootComponent {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
