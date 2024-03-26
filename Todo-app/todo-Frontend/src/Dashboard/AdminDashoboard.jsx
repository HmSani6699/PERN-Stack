import React from "react";

const AdminDashoboard = ({ data }) => {
  const { name, email, phone } = data;
  return (
    <div>
      <h1>User Dashobard </h1>
      <h2>Name: {name}</h2>
      <h2>Name: {email}</h2>
      <h2>Name: {phone}</h2>
    </div>
  );
};

export default AdminDashoboard;
