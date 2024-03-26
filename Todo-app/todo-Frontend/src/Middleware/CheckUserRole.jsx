import React, { useEffect, useState } from "react";
import UserDashboard from "../Dashboard/UserDashboard";
import AdminDashoboard from "../Dashboard/AdminDashoboard";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const CheckUserRole = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    if (user) {
      setUserData(user);
    } else {
      navigate("/");
    }
  }, []);
  return (
    <div>
      {userData && userData?.role === "user" ? (
        <MainLayout data={userData} />
      ) : userData?.role === "admin" ? (
        <AdminDashoboard data={userData} />
      ) : null}
    </div>
  );
};

export default CheckUserRole;
