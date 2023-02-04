import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Employees from "./Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const EmployeeContext = createContext();

function App() {
  const [employees, setEmployees] = useState();
  const [employeeDetail, setEmployeeDetail] = React.useState();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setEmployeeDetail(data[6]);
      });
  }, []);
  return (
    <div>
      <EmployeeContext.Provider
        value={{
          searchInput,
          setSearchInput,
          employeeDetail,
          setEmployeeDetail
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-emp" element={<Form />} />
            <Route
              path="/emp-list"
              element={
                <Employees
                  setEmployeeDetail={setEmployeeDetail}
                  employeeDetail={employeeDetail}
                  employees={employees}
                  title="my list"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </EmployeeContext.Provider>
    </div>
  );
}
export default App;
