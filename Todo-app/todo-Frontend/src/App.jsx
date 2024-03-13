import { useEffect, useState } from "react";
import InputField from "./component/InputField";
import axios from "axios";
import UserCard from "./component/UserCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./component/Modal";
import UserDetailsModal from "./component/UserDetailsModal";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, seDetails] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [openUserDetailsModal, setopenUserDetailsModal] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  // Added a new user
  const handleAddUser = () => {
    const playload = {
      name,
      email,
      phone,
      description: details,
    };

    try {
      axios.post("http://localhost:5000/createUser", playload).then((res) => {
        console.log(res);
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
      });
    } catch (error) {
      console.log(error);
    }
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
  const handleUpdate = (id, playload) => {
    console.log("Update", id, playload);
    try {
      axios
        .put(`http://localhost:5000/updateUser/${id}`, playload)
        .then((response) => {
          console.log(response?.data);
          if (!response?.data.error) {
            setOpenModal(false);
            handleGetAllUsers();
            toast.success("User Update successfully!");
          } else {
            toast.error(response?.data.error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a user
  const handleDelete = (id) => {
    try {
      axios
        .delete(`http://localhost:5000/deleteUser/${id}`)
        .then((response) => {
          console.log("Data deleted:", response.data);
          handleGetAllUsers();
          toast.success("User Delete successfully!");
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
        });
    } catch (error) {}
  };

  // get  a single  user
  const handleGetUser = (id) => {
    if (!id) {
      toast.error("ID is NOt Working");
      return;
    }
    setopenUserDetailsModal(true);
    try {
      axios.get(`http://localhost:5000/getUser/${id}`).then((response) => {
        console.log(response?.data?.data[0]);
        setUserDetails(response?.data?.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      <h1 className="text-4xl font-bold text-center mt-6 mb-10">
        Simple Todo App
      </h1>

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

      {/* Disply tha all users */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-20 mb-32">
        {allUsers &&
          allUsers.map((user, i) => (
            <UserCard
              key={i}
              id={user.id}
              setId={setId}
              name={user.name}
              phone={user.phone}
              email={user.email}
              handleDelete={handleDelete}
              handleGetUser={handleGetUser}
              setOpenModal={setOpenModal}
            />
          ))}
      </div>
      {openModal ? (
        <div>
          <Modal
            id={id}
            setOpenModal={setOpenModal}
            handleUpdate={handleUpdate}
          />
        </div>
      ) : null}

      {openUserDetailsModal ? (
        <UserDetailsModal
          setopenUserDetailsModal={setopenUserDetailsModal}
          userDetails={userDetails}
        />
      ) : null}
      <ToastContainer />
    </div>
  );
}

export default App;
