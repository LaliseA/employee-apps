import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const HomePage = ({ employees, setEmployeeDetail }) => {
  return (
    <div className="home-page">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default HomePage;
