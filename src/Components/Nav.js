import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginProvider";
import { useContext } from "react";

function Nav() {
  const { isAuthenticated, authenticationHandler } = useContext(LoginContext);
  const style = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/" style={style}>
          <li>Home</li>
        </Link>{" "}
        <Link to="/about" style={style}>
          <li>About</li>
        </Link>{" "}
        <Link to="/shop" style={style}>
          <li>Shop</li>
        </Link>
        <button onClick={() => authenticationHandler()}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
