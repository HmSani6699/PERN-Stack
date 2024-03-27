import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ url, title, img }) => {
  return (
    <div>
      <Link
        className="hover:bg-[#2f49656b] hover:text-white rounded-lg w-full  text-black py-[15px] pl-[15px] text-[18px] font-semibold cursor-pointer flex gap-3 items-center"
        to={url}
      >
        <img src={img} alt="" />
        {title}
      </Link>
    </div>
  );
};

export default NavLink;
