import { Link } from "react-router-dom";
import avatar_icon from "../assets/images/avatar.svg";
import logOut_icon from "../assets/images/logOut.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <div className=" bg-[#2f4965] ">
      <div className="h-[70px] flex items-center justify-between max-w-[1400px] mx-auto  ">
        <h1 className="text-[30px] text-[#f1690f]">Multi Role Web</h1>

        {/* Nav link */}
        <nav className="">
          <ul className="flex items-center gap-[20px] text-white">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {userData && (
              <li>
                <div className="relative">
                  <div
                    onClick={() => setOpen(!open)}
                    className="border-2 rounded-full p-[5px]"
                  >
                    <img src={avatar_icon} alt="avatar img" />
                  </div>
                  {open ? (
                    <div className="absolute top-[55px] right-0 bg-[#2f4965] p-[20px] rounded-bl-[10px] rounded-br-[10px] w-[300px]">
                      <h2 className="text-center text-[25px]">
                        {userData?.name}
                      </h2>
                      <hr />
                      <Link
                        className="flex gap-3 text-[16px] font-semibold my-[15px]"
                        to={logout}
                      >
                        <img src={logOut_icon} alt="" />
                        Dashboard
                      </Link>
                      <hr />
                      <Link
                        className="flex gap-3 text-[16px] font-semibold mt-[10px]"
                        to={logout}
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
