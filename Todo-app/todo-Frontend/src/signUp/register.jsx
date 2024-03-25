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
    <div>
      <div className="flex items-center gap-4">
        <div className="w-[90%] grid grid-cols-1 md:grid-clos-2 lg:grid-cols-3 gap-4 ">
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
        <button
          onClick={handleAddUser}
          className="w-[10%] p-3 bg-green-400 text-white rounded-md border-none font-bold mt-[35px]"
        >
          +Add User
        </button>
      </div>
      <textarea
        placeholder="Enter your Details"
        className="border-2 border-gray-300 outline-none mt-4 w-full p-3 rounded-md"
        rows="5"
        value={details}
        onChange={(e) => seDetails(e.target.value)}
      />
    </div>
  );
};

export default register;
