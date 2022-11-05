import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import Index from "./pages/finder";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Index />
  </StrictMode>
);
