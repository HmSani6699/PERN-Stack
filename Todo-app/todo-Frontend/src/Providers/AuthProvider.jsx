import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //   const location = useLocation();
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
