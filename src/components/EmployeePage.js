import React from "react";
import Header from "./Header";
import EmployeeDetail from "./EmployeeDetail";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function EmployeePage({ employeeDetail }) {
  return (
    <div className="employee-page">
      <Header title="Employee" icon={faAngleLeft} />
      <EmployeeDetail employeeDetail={employeeDetail} />
    </div>
  );
}

export default EmployeePage;
