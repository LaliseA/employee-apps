import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

const HomePage=( {Employee, setEmployeeDetail})=>{
  return (
    <div className='home-page'>
        <Header title="Employee Directory" />
        <SearchBar />
        <EmployeeList Employee={Employee} />

    </div>
  );
}

export default HomePage;