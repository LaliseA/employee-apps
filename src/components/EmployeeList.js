import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  return (
    <div className="EmployList" style={styledEmpList}>
      {employees?.map((emp) => (
        <EmployeeListItem
          name={emp.name}
          image={emp.image}
          title={emp.occupation}
        />
      ))}
    </div>
  );
}
const styledEmpList = {
  border: "2px solid purple",
  padding: "2px",
};
export default EmployeeList;
