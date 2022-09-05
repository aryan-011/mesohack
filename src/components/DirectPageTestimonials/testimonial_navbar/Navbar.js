/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link,NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-logo" to="/">
            <img src={logo} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {/* <li className="nav-item dropdown">
                <a className="nav-a dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/track-appointments">
                  Track Appointments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/patient-details'>
                  Patients
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/patient-profile'>
                Patient Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/doctor-list'>
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/appointment'>
                  Book An Appointment
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Diseases
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="animated-button" to='/login-page'>
                  <button type="button" className="button">
                    Get Started
                  </button>
                  <div className="background"></div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
