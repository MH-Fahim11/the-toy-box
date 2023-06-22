import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/MainRoute";
import AuhtProvider from "./providers/AuhtProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuhtProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuhtProvider>
  </React.StrictMode>
);
