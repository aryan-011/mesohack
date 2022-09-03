import React from 'react'
import Navbar from '../DirectPageTestimonials/testimonial_navbar/Navbar'
import './trackYourAppointment.css'
import patientimg from '../DirectPageTestimonials/testimonial_testimonials/testimonial_case/patientimg.png'
function TrackAppointment() {
    return (
        <div id='Aryan1'>
            <>
                <Navbar />
                <div className='AppointmentWrapper'>
                    <h1>Your Appointment</h1>
                    <div className='AppointmentHeader'>


                        <div className='AppointmentDetails'>
                            <div className='AppointmentDetailsLeft'>
                                <h2>Appointment Details</h2>
                                <div className='ADets'>

                                    <p>Appointment ID = 17876347545</p>
                                    <p>Appointment Date = 12/09/22</p>
                                    <p>Appointment Time = 17:00 </p>
                                    <p>Current Status = Pending</p>
                                    <p>Appointment Type = offline</p>
                                    <p>Expected Time = 9 days </p>
                                </div>
                            </div>
                            <hr />
                            <div className='AppointmentDetailsRight'>
                                <h2>Patient Details</h2>
                                <div className='PDets'>
                                    <div className='PatientImgWrapper'>

                                        <img className='PatientImg' src={patientimg} alt="img" />
                                    </div>
                                    <div className='PatientD'>

                                        <p>Name = Sandeep Saini</p>
                                        <p>Age = Pata nahi zinda kaise hai</p>
                                        <p>Issues = Gand mein zrurat se jyada khujli</p>
                                        <p>Doctor's Name = Rahul Banerjee</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </>

        </div>
    );
}

export default TrackAppointment;
