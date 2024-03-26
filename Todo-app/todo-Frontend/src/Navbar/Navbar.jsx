import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#2f4965] ">
      <div className="h-[70px] flex items-center justify-between max-w-[1400px] mx-auto  ">
        <h1 className="text-[30px] text-[#f1690f]">Multi Role Web</h1>

        {/* Nav link */}
        <nav className="">
          <ul className="flex gap-[20px] text-white">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
