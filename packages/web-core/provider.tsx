import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

type MyProviderProps = { children: React.ReactNode };

export default MyProvider;
