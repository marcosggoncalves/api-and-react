import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import Index from "./pages";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Index />
  </StrictMode>
);
