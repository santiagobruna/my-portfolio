import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const initialTheme = (() => {
  const stored = localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
})();
document.documentElement.setAttribute("data-theme", initialTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
