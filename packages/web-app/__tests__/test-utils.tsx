import * as React from "react";
import { render } from "@testing-library/react";

// Add in any providers here if necessary:
const Providers: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return children;
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
