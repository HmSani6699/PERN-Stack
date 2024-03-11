import React from "react";

const UserCard = ({ name, phone, email }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-5 relative">
      <h2 className="text-3xl font-semibold ">{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>

      <div className="flex justify-end">
        <button className="text-white font-bold bg-red-400"> delete</button>
      </div>
    </div>
  );
};

export default UserCard;
