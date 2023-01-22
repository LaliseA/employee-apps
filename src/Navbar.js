import React from 'react'

function Navbar() {
  return (
  <div className='navbar'> 
    <div className='navbar-logo'>
        Ethiopiaflag
    </div>
    <ul className='navbar-menu'>
        <li><a href="/Home">Home</a></li>
        <li><a href="/add employee">add employee</a></li>
        <li><a href="/employee list">employee list</a></li>

    </ul>
    </div>

  )
}

export default Navbar;