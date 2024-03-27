import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <RouterProvider router={router} />
        {/* <Outlet /> */}
      </div>
    </AuthProvider>
  </React.StrictMode>
);
