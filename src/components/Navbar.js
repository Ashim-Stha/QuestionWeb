import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="li" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="li" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="li" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
