import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContext } from "./Context/GlobalContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalContext>
        <App />
      </GlobalContext>
    </ThemeContextProvider>
  </StrictMode>,
);
