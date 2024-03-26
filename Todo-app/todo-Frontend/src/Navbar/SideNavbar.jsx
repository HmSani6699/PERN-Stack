import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/images/user_icon.svg";

const SideNavbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const { name, email, phone, role } = userData;

  // get user information
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    setUserData(user);
  }, []);

  const logout = () => {
    window.localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-[350px] fixed  min-h-screen border-r-2">
      {/* user info */}
      <img src={user_icon} alt="" />
    </div>
  );
};

export default SideNavbar;
