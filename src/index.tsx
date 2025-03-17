import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebsiteLightMode } from "./DesktopLightMode";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <WebsiteLightMode />
  </StrictMode>,
);
