import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';

const OfflineForm = (props) => {
    const navigate=useNavigate();
  return (
<div className="container mt-5 mb-5 d-flex justify-content-center">

  <div className="card px-1 py-4">
    <div className="card-body">
    <h6 className="card-title mb-3">Doctor's Name:{}</h6>
      <h6 className="card-title mb-3">Mode of Appointment</h6>
      <div className="d-flex flex-row">
        {" "}
        <label className="radio mr-1">
          {" "}
          <input
            type="radio"
            name="add"
            defaultValue="anz"
            defaultChecked=""
          />{" "}
          <span onClick={() => navigate("/appointment")}>
            {" "}
            <i className="fa fa-user" /> Online{" "}
          </span>{" "}
        </label>{" "}
        <label className="radio">
          {" "}
          <input type="radio" name="add" defaultValue="add" />{" "}
          <span onClick={() => navigate("/offline-form")}>
            {" "}
            <i className="fa-solid fa-shoe-prints"  /> Offline{" "}
          </span>{" "}
        </label>{" "}
      </div>
      <h6 className="information mt-4">
        Please provide the following information :
      </h6>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            {/* <label for="name">Name</label> */}{" "}
            <input className="form-control" type="text" placeholder="Patient Name" />{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <div className="input-group">
              {" "}
              <input
                className="form-control"
                type="text"
                placeholder="Mobile"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <div className="input-group">
              {" "}
              <input
                className="form-control"
                type="text"
                placeholder="Email ID"
              />{" "}
            </div>
          </div>
        </div>
      </div>


      <select id="cars" className="btn btn-outline-secondary dropdown-toggle appointment-button">
  <option value="volvo" hidden selected>Choose an Appointment Slot </option>
  <option value="saab">9:00 A.M</option>
  <option value="vw">9:15 A.M</option>
  <option value="audi" >9:30 A.M</option>
</select>

<div class="form-group shadow-textarea">
  
  <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="4" style={{resize:"none"}} placeholder="Overview of the Problem(optional)..."></textarea>
</div>

      
      <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
        {" "}
        <small className="agree-text">
          By Booking this appointment you agree to the
        </small>{" "}
        <a href="/" className="terms">
          Terms &amp; Conditions
        </a>{" "}
      </div>{" "}
      <button className="btn btn-primary btn-block confirm-button">
        Confirm
      </button>
    </div>
  </div>
</div>

  )
}

export default OfflineForm