import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login/Login";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
