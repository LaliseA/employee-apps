import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img width="65" src="https://www.jdfulwiler.com/wp-content/uploads/2017/08/abc-company-test-logo-300x205.png" alt="abc" />
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-emp">Add employee</Link>
        </li>
        <li>
          <Link to="/emp-list">Employee list</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
