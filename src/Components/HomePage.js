import React, { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";

const Home = () => {
  const { isAuthenticated, authenticationHandler } = useContext(LoginContext);

  return (
    <>
      <h1>Homepage</h1>
      {isAuthenticated ? (
        <p>You're Logged in</p>
      ) : (
        <p style={{ border: "2px solid red" }}>You're not logged in</p>
      )}
    </>
  );
};

export default Home;
