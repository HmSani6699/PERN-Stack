import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/images/user_icon.svg";
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
    <div className="w-[350px] fixed flex  min-h-screen border-r-2">
      <div className="w-[50px] bg-[#f1690f]"></div>

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
          <NavLink url={"/login"} title={"Login"} />
        </div>

        {/* Logout  */}
        <div
          onClick={logout}
          className="bg-[#f1690f] w-full text-white py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer"
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
