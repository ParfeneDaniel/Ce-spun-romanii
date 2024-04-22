import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { GeneralContextProvider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </React.StrictMode>
);
