import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ url, title }) => {
  return (
    <div>
      <Link
        className="bg-[#f1690f] w-full block text-white py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer"
        to={url}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
