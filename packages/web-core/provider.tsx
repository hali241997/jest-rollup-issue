import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

type GadaProviderProps = { children: React.ReactNode };

const GadaProvider: React.FC<GadaProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default GadaProvider;
