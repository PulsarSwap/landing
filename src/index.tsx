import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebsiteLightMode } from "./screens/WebsiteLightMode";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WebsiteLightMode />
  </StrictMode>,
);
