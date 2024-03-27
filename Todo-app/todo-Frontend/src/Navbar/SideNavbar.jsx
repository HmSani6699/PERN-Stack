import React, { useEffect, useState } from "react";
import NavLink from "../component/NavLink";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/images/sani.jpg";
import d_user_icon from "../assets/images/D_user_icon.svg";
import logOut_icon_2 from "../assets/images/logOut_2.svg";
import avatar_icon from "../assets/images/avatar.svg";
import dashboard_icon from "../assets/images/dashboard_2.svg";

const SideNavbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  // get user information
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    setUserData(user);
  }, []);

  const logout = () => {
    window.localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <div className="w-[300px] fixed bg-white  min-h-screen border-r-2 p-[20px]">
      <div className="w-full">
        {/* user info */}
        <div className="flex items-center justify-center pt-[30px]">
          <div className="border-2 rounded-full p-[10px]">
            <img className="rounded-full" src={user_icon} alt="" />
          </div>
        </div>
        <h2 className="text-[30px] font-[600] text-center mb-[50px]">
          {userData && userData?.name}
        </h2>

        {/* Navigate menubar */}
        <div>
          <NavLink
            url={"/dashboard"}
            img={dashboard_icon}
            title={"Dashoboard"}
          />
          <NavLink
            url={"/dashboard/profile"}
            img={d_user_icon}
            title={"Profile"}
          />
        </div>

        {/* Logout  */}
        <div
          onClick={logout}
          className="hover:bg-[#2f49656b]  w-full rounded-lg text-black py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer flex gap-3 items-center"
        >
          <img className="text-white" src={logOut_icon_2} alt="" />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
