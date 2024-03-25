import React, { useState } from "react";
import InputField from "../component/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Added a new user
  const handleAddUser = () => {
    const playload = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/login", playload)
      .then((res) => {
        console.log(res?.data.success);
        if (res?.data.success) {
          console.log(res?.data?.data);
          setEmail("");
          setPassword("");
          window.localStorage.setItem("user", JSON.stringify(res?.data?.data));
          toast.success(res?.data?.message);
          navigate("/userDashboard");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      });
  };
  return (
    <div className="h-[100vh]  flex items-center justify-center">
      <div className="lg:w-[600px] border-2 border-t-[10px]   border-t-[#f1690f] p-[50px] rounded-[20px]">
        <h2 className="text-[30px] font-[700] mb-[20px] text-center">Login</h2>
        <div className="mt-[15px]">
          <InputField
            title="Email"
            value={email}
            setValue={setEmail}
            type="text"
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
          Login
        </button>

        <h2 className="text-[18px] mt-[15px] text-center">
          Don't have an acount?
          <Link
            className="text-[20px] font-[600] text-[#f1690f] ml-1"
            to="/register"
          >
            Sing Up
          </Link>
        </h2>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
