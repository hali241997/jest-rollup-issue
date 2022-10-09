import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type MyProviderProps = { children: React.ReactNode };

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MyProvider;
