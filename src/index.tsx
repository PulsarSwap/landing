import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopLightMode } from "./screens/DesktopLightMode";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopLightMode />
  </StrictMode>,
);
