import React, { useState } from "react";
import InputField from "../component/InputField";
import { Link } from "react-router-dom";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Added a new user
  const handleAddUser = () => {
    const playload = {
      name,
      email,
      phone,
      password,
    };

    console.log(20, playload);

    // axios
    //   .post("http://localhost:5000/register", playload)
    //   .then((res) => {
    //     console.log(35, res);
    //     if (!res.data?.error) {
    //       setName("");
    //       setEmail("");
    //       setPhone("");
    //       setPassword("");

    //       toast.success("User Create successfully!");
    //     } else {
    //       toast.error(res?.data?.error);
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error(error?.response?.data?.message);
    //   });
  };
  return (
    <div className="h-[100vh]  flex items-center justify-center mt-[100px] mb-[100px]">
      <div className="lg:w-[600px] border-2 border-t-[10px]   border-t-[#f1690f] p-[50px] rounded-[20px]">
        <h2 className="text-[30px] font-[700] mb-[20px] text-center">
          Sign Up
        </h2>
        <div className="mb-[15px]">
          <InputField
            title="Name"
            value={name}
            setValue={setName}
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="mt-[15px]">
          <InputField
            title="Phone"
            value={phone}
            setValue={setPhone}
            type="number"
            placeholder="Enter your Phone number"
          />
          {phone.length >= 12 ? (
            <p className="text-red-400">Max length 11</p>
          ) : null}
        </div>
        <div className="mt-[15px]">
          <InputField
            title="Email"
            value={email}
            setValue={setEmail}
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mt-[15px]">
          <InputField
            title="Password"
            value={password}
            setValue={setPassword}
            type="text"
            placeholder="Enter your Password "
          />
        </div>

        <button
          onClick={handleAddUser}
          className="w-full text-[20px] p-3 bg-[#f1690f] text-white rounded-tl-[20px] rounded-br-[20px] border-none font-bold mt-[35px]"
        >
          Sign up
        </button>
        <h2 className="text-[18px] mt-[15px] text-center">
          Already have an acount?
          <Link className="text-[20px] font-[600] text-[#f1690f] ml-1" to="/">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default register;
