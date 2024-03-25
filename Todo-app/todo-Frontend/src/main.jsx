import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Register from "./signUp/register.jsx";
// import router from "./router/router.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      {/* <App /> */}
      <Register />
      {/* <RouterProvider router={router} /> */}
    </div>
  </React.StrictMode>
);
