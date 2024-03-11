import React, { useState } from "react";
import InputField from "./InputField";

const Modal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="absolute top-[30%] left-[25%]  bg-white border-2 border-gray-300 p-8 w-[50%] rounded-2xl ">
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
    </div>
  );
};

export default Modal;
