import React from 'react'

function EmployeeListItem({ name, title, image }) {
  return (
    <div className='emp-item'>
      <div>
        <img width={50} height={50} style={{ borderRadius: "50%" }} src={image} />
      </div>
      <div>
        <div>{name}</div>
        <div>{title}</div>
      </div>
    </div>

  )
}

export default EmployeeListItem;