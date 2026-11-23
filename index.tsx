import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { corridorPath } from "./seo/urls";
import "./components/corridor.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
if (window.location.pathname === corridorPath) {
  // Keep the interactive corridor code out of the thumbnail grid's initial bundle.
  void import("./components/TimeCorridor").then(({ default: TimeCorridor }) => {
    root.render(
      <React.StrictMode>
        <TimeCorridor />
      </React.StrictMode>,
    );
  });
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
