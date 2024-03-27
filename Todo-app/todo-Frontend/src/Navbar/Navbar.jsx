import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar_icon from "../assets/images/avatar.svg";
import logOut_icon from "../assets/images/logOut.svg";
import dashboard_icon from "../assets/images/dashboard.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState([]);

  const logout = () => {
    window.localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className=" bg-[#2f4965] ">
      <div className="h-[70px] flex items-center justify-between max-w-[1400px] mx-auto  ">
        <h1 className="text-[30px] text-[#f1690f]">Multi Role Web</h1>

        {/* Nav link */}
        <nav className="">
          <ul className="flex items-center gap-[20px] text-white">
            <li>
              <Link className="text-[16px] font-semibold" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-[16px] font-semibold" to="/register">
                Register
              </Link>
            </li>
            {userData && (
              <li>
                <div className="relative">
                  <div
                    onClick={() => setOpen(!open)}
                    className="border-2 rounded-full p-[5px] cursor-pointer relative z-[2]"
                  >
                    <img
                      width={40}
                      height={40}
                      src={avatar_icon}
                      alt="avatar img"
                    />
                  </div>
                  {open ? (
                    <div className="absolute top-[50px] right-0 bg-[#2f4965] p-[30px] rounded-bl-[10px] rounded-br-[10px] w-[300px]">
                      <h2 className="text-center text-[25px]">
                        {userData?.name}
                      </h2>
                      <hr className="my-[17px]" />
                      <Link
                        className="flex gap-3 text-[16px] font-semibold "
                        to={logout}
                      >
                        <div className="border-2 rounded-full p-[2px] cursor-pointer">
                          <img
                            width={15}
                            height={15}
                            src={avatar_icon}
                            alt=""
                          />
                        </div>
                        Profile
                      </Link>
                      <hr className="my-[17px]" />
                      <Link
                        className="flex gap-3 text-[16px] font-semibold "
                        to={logout}
                      >
                        <img src={dashboard_icon} alt="" />
                        Dashboard
                      </Link>
                      <hr className="my-[17px]" />
                      <Link
                        className="flex gap-3 text-[16px] font-semibold "
                        to="/"
                        onClick={logout}
                      >
                        <img src={logOut_icon} alt="" />
                        Log Out
                      </Link>
                    </div>
                  ) : null}
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
