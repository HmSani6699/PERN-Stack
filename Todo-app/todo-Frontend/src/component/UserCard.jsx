import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsEyedropper } from "react-icons/bs";

const UserCard = ({
  id,
  name,
  phone,
  email,
  setOpenModal,
  handleDelete,
  setId,
}) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-5 relative">
      <h2 className="text-3xl font-semibold ">{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>

      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => handleDelete(id)}
          className="text-white font-bold bg-red-800 p-2 rounded-md"
        >
          <RiDeleteBin6Line />
        </button>
        <button
          onClick={() => {
            setOpenModal(true);
            setId(id);
          }}
          className="text-white font-bold bg-green-500 p-2 rounded-md"
        >
          <BsEyedropper />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
