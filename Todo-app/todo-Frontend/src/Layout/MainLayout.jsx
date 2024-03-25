import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login/Login";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default MainLayout;
