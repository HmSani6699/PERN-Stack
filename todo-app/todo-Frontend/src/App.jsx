import { useState } from "react";
import InputField from "./component/InputField";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // console.log(name, phone, email);

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
        <button className="w-[10%] p-3 bg-green-400 text-white rounded-md border-none font-bold mt-[35px]">
          +Add User
        </button>
      </div>
    </div>
  );
}

export default App;
