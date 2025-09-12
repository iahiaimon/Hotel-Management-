import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/Router.jsx";
import * as React from "react";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
