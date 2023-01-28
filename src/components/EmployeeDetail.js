import React from "react";

export default function EmployeeDetail({ employeeDetail }) {
  return (
    <div className="emp-detail">
      <div className="emp-detail-header">
        <div style={{ paddingLeft: "20px" }}>
          <img
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
            src={employeeDetail?.image}
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <div>{employeeDetail?.name}</div>
          <div>{employeeDetail?.title}</div>
        </div>
      </div>
      <div className="emp-detail-contact">
        <div>
          <div>Call office</div>
          {employeeDetail?.callOffice}
        </div>
        <div style={{ alignSelf: "center" }}> {">"} </div>
      </div>
      <div className="emp-detail-contact">
        <div>
          <div> Call Mobile</div>
          {employeeDetail?.callMobile}
        </div>
        <div style={{ alignSelf: "center" }}> {">"} </div>
      </div>
      <div className="emp-detail-contact">
        <div>
          <div> Email</div>
          {employeeDetail?.email}
        </div>
        <div style={{ alignSelf: "center" }}> {">"} </div>
      </div>
    </div>
  );
}
