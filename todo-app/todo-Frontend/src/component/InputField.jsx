import React from "react";

const InputField = ({ value, setValue, type = "text", placeholder, title }) => {
  return (
    <div>
      <p></p>

      {title && <p className="font-semibold mb-2 text-[18px]"> {title}</p>}
      <input
        className="w-full outline-none border-2 border-gray-300 rounded-md p-3"
        type="text"
      />
    </div>
  );
};

export default InputField;
