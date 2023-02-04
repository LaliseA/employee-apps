import React, { useContext } from "react";
import Header from "./Header";
import EmployeeDetail from "./EmployeeDetail";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { EmployeeContext } from "../App";

function EmployeePage() {
  const { employeeDetail } = useContext(EmployeeContext);
  return (
    <div className="employee-page">
      <Header title="Employee" icon={faAngleLeft} />
      <EmployeeDetail employeeDetail={employeeDetail} />
    </div>
  );
}

export default EmployeePage;
