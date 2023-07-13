import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
      </li>
    </nav>
  );
};

export default navbar;
