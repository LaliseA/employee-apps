import React from 'react'
import Header from './Header';
import EmployeeDetail from './EmployeeDetail';

 function EmployeePage({EmployeeDetail}) {
  return (
    <div className='employee-page' >
        <Header title="Employee"/>
        <EmployeeDetail EmployeeDetail={EmployeeDetail}/>
    </div>
  );
}

export default EmployeePage;
