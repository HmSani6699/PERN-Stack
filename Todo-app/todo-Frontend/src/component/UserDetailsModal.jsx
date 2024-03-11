import React from "react";
import { IoClose } from "react-icons/io5";

const UserDetailsModal = ({ userDetails, setopenUserDetailsModal }) => {
  console.log(userDetails);
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-5 w-[50%] relative z-10 rounded-xl">
        <div className="flex justify-end">
          <IoClose
            className="cursor-pointer text-2xl"
            onClick={() => setopenUserDetailsModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
