import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/images/user_icon.svg";
import logOut_icon_2 from "../assets/images/logOut_2.svg";
import NavLink from "../component/NavLink";

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
          <div className="border-2 rounded-full p-[20px]">
            <img src={user_icon} alt="" />
          </div>
        </div>
        <h2 className="text-[30px] font-[600] text-center mb-[50px]">
          {userData && userData?.name}
        </h2>

        {/* Navigate menubar */}
        <div>
          <NavLink url={"/login"} img={logOut_icon_2} title={"Dashoboard"} />
          <NavLink url={"/login"} img={logOut_icon_2} title={"Profile"} />
        </div>

        {/* Logout  */}
        <div
          onClick={logout}
          className="hover:bg-[#2f49656b] hover:text-white w-full rounded-lg text-black py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer flex gap-3 items-center"
        >
          <img src={logOut_icon_2} alt="" />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
