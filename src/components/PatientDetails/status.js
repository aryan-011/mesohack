import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'; 

function Status({status}) {
    let color='danger';
    if(status==='Active'){
        color='success'
    }
    return (

        <MDBBadge color={color} pill> {status} </MDBBadge>
    )
}

export default Status
