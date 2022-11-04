import { store } from "@issue/web-core";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const RootComponent = Component as any;

  return (
    <Provider store={store}>
      <RootComponent {...pageProps} />
    </Provider>
  );
}

export default MyApp;
