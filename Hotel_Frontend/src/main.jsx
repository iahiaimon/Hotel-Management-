import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./Routes/Router.jsx";
import * as React from "react";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
