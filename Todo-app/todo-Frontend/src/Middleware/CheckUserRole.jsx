import React, { useEffect, useState } from "react";
import UserDashboard from "../Dashboard/UserDashboard";
import AdminDashoboard from "../Dashboard/AdminDashoboard";

const CheckUserRole = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    setUserData(user);
  }, []);
  return (
    <div>
      {userData && userData?.role === "user" ? (
        <UserDashboard data={userData} />
      ) : userData?.role === "admin" ? (
        <AdminDashoboard data={userData} />
      ) : null}
    </div>
  );
};

export default CheckUserRole;
