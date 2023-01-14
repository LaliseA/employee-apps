import React from 'react'
import Header from './Header';
import EmployeeDetail2 from './EmployeeDetail';

 function EmployeePage({EmployeeDetail}) {
  return (
    <div className='employee-page' >
        <Header title="Employee"/>
        <EmployeeDetail2 EmployeeDetail={EmployeeDetail}/>
    </div>
  );
}

export default EmployeePage;
