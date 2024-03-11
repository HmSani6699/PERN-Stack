import { useEffect, useState } from "react";
import InputField from "./component/InputField";
import axios from "axios";
import UserCard from "./component/UserCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // console.log(name, phone, email);

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  // Added a new user
  const handleAddUser = () => {
    const playload = {
      name,
      email,
      phone,
    };

    setName("");
    setEmail("");
    setPhone("");
    setAllUsers("");

    axios
      .post("http://localhost:5000/createUser", playload)
      .then((response) => {
        console.log(response);
        toast.success("User Create successfully!");
        handleGetAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get all users
  const handleGetAllUsers = () => {
    try {
      axios.get("http://localhost:5000/getAllUsers").then((response) => {
        console.log(response?.data);
        setAllUsers(response?.data?.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update a user
  const handleUpdate = () => {
    try {
    } catch (error) {}
  };

  // Delete a user
  const handleDelete = () => {};

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-6 mb-10">
        Simple Todo App
      </h1>

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

      {/* Disply tha all users */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-20">
        {allUsers &&
          allUsers.map((user, i) => (
            <UserCard
              key={i}
              name={user.name}
              phone={user.phone}
              email={user.email}
            />
          ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
