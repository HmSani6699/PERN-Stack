import React from "react";
import NavLink from "../component/NavLink";
import dashboard_icon from "../assets/images/dashboard_2.svg";
import d_user_icon from "../assets/images/D_user_icon.svg";

const UserNavLink = () => {
  return (
    <div>
      <NavLink url={"/dashboard"} img={dashboard_icon} title={"Dashoboard"} />
      <NavLink url={"/dashboard/profile"} img={d_user_icon} title={"Profile"} />
    </div>
  );
};

export default UserNavLink;
