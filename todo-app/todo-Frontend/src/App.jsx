import { useState } from "react";
import InputField from "./component/InputField";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-6">Simple Todo App</h1>

      <div>
        <InputField
          title="Name"
          value={name}
          setValue={setName}
          type="text"
          placeholder="Enter your name"
        />
      </div>
    </>
  );
}

export default App;
