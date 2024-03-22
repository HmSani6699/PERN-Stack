import React from "react";
import { IoClose } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";

const UserDetailsModal = ({ userDetails, setopenUserDetailsModal }) => {
  console.log(userDetails?.name);
  //   const { name, email, phone, description } = userDetails;

  // Check text
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const renderLinks = (text) => {
    return text.split(urlRegex).map((part) => {
      if (part.match(urlRegex)) {
        return <a href={part}>{part}</a>;
      } else {
        return part;
      }
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center ">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-5 w-[50%] relative z-10 rounded-xl h-[500px] overflow-y-scroll">
        {/* close icon */}
        <div className="flex justify-end">
          <IoClose
            className="cursor-pointer text-2xl"
            onClick={() => setopenUserDetailsModal(false)}
          />
        </div>
        {/* Details */}
        <div>
          <div className="flex justify-center">
            <FaUserGraduate className="text-gray-400 text-[70px]" />
          </div>
          <h2 className="text-3xl text-center font-semibold mt-4">
            {userDetails?.name}
          </h2>
          <p className="text-center">{userDetails?.phone}</p>
          <p className="text-center">{userDetails?.email}</p>
          <h2 className="mt-5 text-[20px] font-semibold">User Details</h2>
          <p>{userDetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
