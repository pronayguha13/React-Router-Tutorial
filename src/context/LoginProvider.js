import React, { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticationHandler = () => {
    setIsAuthenticated(!isAuthenticated);
    console.log("authenticationHandler -> isAuthenticated", isAuthenticated);
  };

  return (
    <LoginContext.Provider
      value={{
        isAuthenticated,
        authenticationHandler,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
