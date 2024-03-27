import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ url, title }) => {
  return (
    <div>
      <Link
        className="hover:bg-[#2f49656b] hover:text-white rounded-lg w-full block text-black py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer"
        to={url}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
