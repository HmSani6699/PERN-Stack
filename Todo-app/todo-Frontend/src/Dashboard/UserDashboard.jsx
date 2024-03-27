import React from "react";
import DashboardNavbar from "../Navbar/DashboardNavbar";

const UserDashboard = ({ data }) => {
  const { name, email, phone, role } = data;
  return (
    <div>
      <h1>User Dashobard </h1>

      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone: {phone}</h2>
      <h2>Role: {role}</h2>
    </div>
  );
};

export default UserDashboard;
