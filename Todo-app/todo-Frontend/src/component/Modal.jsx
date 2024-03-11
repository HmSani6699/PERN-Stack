import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import axios from "axios";

const Modal = ({ id, setOpenModal, handleUpdate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const playload = {
    name,
    email,
    phone,
  };

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/getUser/${id}`).then((res) => {
        console.log(res?.data?.data[0]);
        const { name, email, phone } = res?.data?.data[0];
        setName(name);
        setEmail(email);
        setPhone(phone);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-5 w-[50%] relative z-10 rounded-xl">
        <InputField
          title="Name"
          value={name}
          setValue={setName}
          type="text"
          placeholder="Enter your name"
        />
        <InputField
          title="Phone"
          value={phone}
          setValue={setPhone}
          type="text"
          placeholder="Enter your Phone number"
        />
        <InputField
          title="Email"
          value={email}
          setValue={setEmail}
          type="text"
          placeholder="Enter your Email"
        />
        <div className="flex gap-4 justify-end mt-6">
          <button
            onClick={() => setOpenModal(false)}
            className="bg-red-600 py-2 px-3 rounded-md text-white font-bold"
          >
            Cancle
          </button>
          <button
            onClick={() => handleUpdate(id, playload)}
            className="bg-green-500 py-2 px-3 rounded-md text-white font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
