import React from "react";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
function Employees(props) {
  return (
    <div className="employees">

        <HomePage
          setEmployeeDetail={props.setEmployeeDetail}
          employees={props.employees}
        />
        <EmployeePage
          employeeDetail={props.employeeDetail}
          employees={props.employees}
        />
      
    </div>
  );
}
export default Employees;
