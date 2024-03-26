import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <SideNavbar />
      <div className="ml-[350px] bg-green-300">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
