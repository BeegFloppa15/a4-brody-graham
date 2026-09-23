import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { StatsSection } from "./stats";



ReactDOM.createRoot(document.getElementById("stats")).render(
  <React.StrictMode>
    <StatsSection />
  </React.StrictMode>,
);
