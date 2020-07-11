import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const style = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about" style={style}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={style}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
