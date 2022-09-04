import React,{ useState } from 'react'
import Status from './status'
function PatientEntity({name,id,issue,phone,status,lastVisit}) {
    const [show,setShow]=useState(false)
    return (
        <>
        <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{name}</p>
                        <p className='text-muted mb-0'>{id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>{issue}</p>
                  </td>
                  <td>
                    <Status status={status} />
                  </td>
                  <td>{phone}</td>
                  <td>
                    <button onClick={() => setShow(!show)}>
                      Edit
                    </button>
                  </td>
                </tr>
                <div>
                  {
                    show ? <div>
                      <p>Name - {name}</p>
                      <p>Patient ID - {id}</p>
                      <p>i=Issues - {issue}</p>
                      <p>Status - {status}</p>
                      <p>Phone NUmber - {phone}</p>
                      <p>Last Visit Date - {lastVisit}</p>
                      <button>Checkup Complete</button>
                      </div> : null
                  }
                </div>
                </>
    )
}

export default PatientEntity
