/**
 * main.jsx
 *
 * Purpose:
 * Bootstraps React providers, routing, Fluent UI theming, and global styles.
 */
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FluentProvider } from "@fluentui/react-components";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { qsolutionTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <FluentProvider theme={qsolutionTheme}>
          <App />
        </FluentProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
