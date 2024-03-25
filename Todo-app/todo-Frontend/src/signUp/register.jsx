import React, { useState } from "react";
import InputField from "../component/InputField";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, seDetails] = useState("");

  // Added a new user
  const handleAddUser = () => {
    const playload = {
      name,
      email,
      phone,
      description: details,
    };

    axios
      .post("http://localhost:5000/createUser", playload)
      .then((res) => {
        console.log(35, res);
        if (!res.data?.error) {
          setName("");
          setEmail("");
          setPhone("");
          seDetails("");
          setAllUsers("");
          handleGetAllUsers();
          toast.success("User Create successfully!");
        } else {
          toast.error(res?.data?.error);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
      });
  };
  return (
    <div className="h-[100vh]  flex items-center justify-center">
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
            type="text"
            placeholder="Enter your Phone number"
          />
        </div>
        <div className="mt-[15px]">
          <InputField
            title="Email"
            value={email}
            setValue={setEmail}
            type="text"
            placeholder="Enter your Email"
          />
        </div>

        <button
          onClick={handleAddUser}
          className="w-full text-[20px] p-3 bg-[#f1690f] text-white rounded-md border-none font-bold mt-[35px]"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default register;
