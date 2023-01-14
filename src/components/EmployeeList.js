import React from 'react'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList({ Employee }) {
  return (
    <div className='EmployList' style={styledEmpList}>
      {Employee?.map((emp) =>
        <EmployeeListItem
          name={emp.name}
          image={emp.image}
          title={emp.title}
        />
      )}
    </div>
  );
}
const styledEmpList = {
  border: "2px solid purple",
  padding: "2px",

}
export default EmployeeList;