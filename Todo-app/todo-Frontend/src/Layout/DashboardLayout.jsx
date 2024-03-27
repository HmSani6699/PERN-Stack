import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";
import DashboardNavbar from "../Navbar/DashboardNavbar";

const DashboardLayout = () => {
  const [userData, setUserData] = useState([]);

  // get user information
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    setUserData(user);
  }, []);

  return (
    <div>
      <SideNavbar />
      <div className="ml-[320px] pt-[20px] pr-[20px]">
        <DashboardNavbar user={userData} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
