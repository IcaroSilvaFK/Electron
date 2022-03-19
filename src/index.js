import { StrictMode } from "react";
import { render } from "react-dom";
import { RoutesApplication } from "./routes";

import { GlobalStyle } from "./styles/global";

render(
  <StrictMode>
    <GlobalStyle />
    <RoutesApplication />
  </StrictMode>,
  document.getElementById("root")
);
