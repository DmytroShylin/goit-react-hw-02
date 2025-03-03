import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);