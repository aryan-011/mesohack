import React, { useState,useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './table.css'
import { Button } from 'bootstrap';
import { Data } from './data';
import Status from './status';
import PatientEntity from './patientEntity';
export default function Table() {


  return (

    <div className='table'>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>PatientID</th>
            <th scope='col'>Issues</th>
            <th scope='col'>Status</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>

          {Data.map((item, index) => {
            console.log(item)
            return (
              <>
                <PatientEntity {...item}/>
              </>
            );
          })}
          {/* <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <button color='link' rounded size='sm'>
              Edit
            </button>
          </td>
        </tr> */}
          {/* <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <button color='link' rounded size='sm'>
              Edit
            </button>
          </td>
        </tr> */}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}