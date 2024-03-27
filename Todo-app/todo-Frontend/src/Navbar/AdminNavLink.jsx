import React from "react";
import NavLink from "../component/NavLink";
import dashboard_icon from "../assets/images/dashboard_2.svg";
import d_user_icon from "../assets/images/D_user_icon.svg";
import manage_user_icon from "../assets/images//manage_user.svg";

const AdminNavLink = () => {
  return (
    <div>
      <NavLink url={"/dashboard"} img={dashboard_icon} title={"Dashoboard"} />
      <NavLink url={"/dashboard/profile"} img={d_user_icon} title={"Profile"} />
      <NavLink
        url={"/dashboard/profile"}
        img={manage_user_icon}
        title={"Manage Users"}
      />
    </div>
  );
};

export default AdminNavLink;
