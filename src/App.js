import "./App.css";
import React, { useEffect, useState } from "react";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Employees from "./Employees";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState();
  const [employeeDetail, setEmployeeDetail] = React.useState();

  useEffect(() => {
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/allemployees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setEmployeeDetail(data[6]);
      });
  }, []);
  // const Employee = [
  //   {
  //     name: "Lisa John",
  //     image:
  //       "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY=",
  //     title: "front end engineer",
  //     phone: "+1651342555",
  //     mobile: "+12045667899",
  //     smsPhone: "+1303778790",
  //     email: "lisa@gmail.com",
  //   },
  //   {
  //     name: "Rose Mark",
  //     image:
  //       "https://media.istockphoto.com/id/637874086/photo/we-have-everything-we-need-to-pass.jpg?s=612x612&w=0&k=20&c=TA25BjZfpE2I7s6kxYmkoXwN8F_H7rlgqKSV1Rv7kD4=",
  //     title: "web designer",
  //     phone: "+177056080",
  //     mobile: "+16126054433",
  //     smsPhone: "+130234545667",
  //     email: "Rose@gmail.com",
  //   },
  //   {
  //     name: "Owen Daniel",
  //     image:
  //       "https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.jpg?s=612x612&w=0&k=20&c=aNseFpOXyHYoywKSZnXUZCABySZZ8rj-k4RVQfAn52k=",
  //     title: " software developer",
  //     phone: "+16516121111",
  //     mobile: "+16126513334",
  //     smsPhone: "+1309766854",
  //     email: "test@gmail.com",
  //   },
  //   {
  //     name: "Rayn",
  //     image:
  //       "https://media.istockphoto.com/id/1150434783/photo/smiling-man-using-laptop.jpg?s=612x612&w=0&k=20&c=vOdhDUxdLzfB3V-48jpA1FMyygyrE_VZIaOcerzI9HY=",
  //     title: "Back end engineer",
  //     phone: "+12046667888",
  //     mobile: "+17708090706",
  //     smsPhone: "+1302223456",
  //     email: "test@gmail.com",
  //   },
  // ];
  return (
    <div>
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

          {/* <HomePage />
      <EmployeePage /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
