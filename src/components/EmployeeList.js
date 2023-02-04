import React, { useContext } from "react";
import { EmployeeContext } from "../App";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  const { searchInput, setEmployeeDetail } = useContext(EmployeeContext);
  const filteredEmployees =
    searchInput !== ""
      ? employees?.filter((emp) => emp.name.includes(searchInput))
      : employees;
  return (
    <div className="EmployList" style={styledEmpList}>
      {filteredEmployees?.map((emp) => (
        <div onClick={() => setEmployeeDetail(emp)}>
          <EmployeeListItem
            name={emp.name}
            image={emp.image}
            title={emp.occupation}
          />
        </div>
      ))}
    </div>
  );
}
const styledEmpList = {
  border: "2px solid purple",
  padding: "2px",
};
export default EmployeeList;
