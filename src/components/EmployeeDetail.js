import React from 'react'

export default function EmployeeDetail({ EmployeeDetail }) {
    return (
        <div className='emp-detail'>
            <div className='emp-detail-header' >
                <div style={{ paddingLeft: "20px" }}>
                    <img width={70} height={70} style={{ borderRadius: "50%" }} src={EmployeeDetail?.image} />
                </div>
                <div style={{ alignSelf: "center" }}>
                    <div>{EmployeeDetail?.name}</div>
                    <div>{EmployeeDetail?.title}</div>
                </div>
            </div>

            <div className='emp-detail-contact'>
                <div ><div>Call office</div>
                    {EmployeeDetail.phone}
                </div>
                <div style={{ alignSelf: "center" }}> {">"} </div>
            </div>
            <div className='emp-detail-contact'>
                <div><div> Call Mobile</div>
                    {EmployeeDetail.mobile}
                </div>
                <div style={{ alignSelf: "center" }}> {">"} </div>
            </div>
            <div className='emp-detail-contact'>
                <div ><div>SMS</div>
                    {EmployeeDetail.smsPhone}
                </div>
                <div style={{ alignSelf: "center" }}> {">"} </div>
            </div>
            <div className='emp-detail-contact'>
                <div ><div> Email</div>
                    {EmployeeDetail.email}
                </div>
                <div style={{ alignSelf: "center" }}> {">"} </div>
            </div>
        </div>
    )
}
