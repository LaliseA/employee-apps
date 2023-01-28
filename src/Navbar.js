import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">Ethiopiaflag</div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-emp">add employee</Link>
        </li>
        <li>
          <Link to="/emp-list">employee list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
