import React from 'react'
import { useState } from 'react';
import patientcard from './patientcard.png'
import cardrectangle from './cardrectangle.png'
import patientimg from './patientimg.png'
import patienttitle from './patienttitle.png'
import './case_test.css'
import Stars from '../../testimonial_stars/stars'
import { Link } from 'react-router-dom';
function case_test({ name, casen, details, alter }) {

    let testimonialCaseClass = 'testimonialCard'
    if (alter === 'true') {
        testimonialCaseClass = 'testimonialCardAlt'
    }
    return (
        <>
            
            <div className={testimonialCaseClass}>
                <div className='caseDets'>
                    <div className='testimonialIdentity'>
                        <h6 className='testimonialCase'>Case {casen}</h6>
                        <img className='testimonialRect' src={cardrectangle} alt='card' />
                        <h5 className='testimonialPatientName'>{name}</h5>
                    </div>
                    <div>
                        <div className='testimonialTimeline'>
                            <img className='testimonialIdImg' src={patientcard} alt='card' />
                            <p className='testimonialId'>Ps/Hom/2022/00{casen}</p>
                        </div>
                    </div>
                    <div className='testimonialTitle'>
                        <img className='titleImg' src={patienttitle} alt='card' />
                        <p className='titleText'>LOREMIMPSUM</p>
                    </div>
                    <div>
                        <p className='testimonialPatientDets'>{details}</p>
                    </div>
                    <div className='testimonialCardFooter'>
                        <button>Book an offline Appointment</button>
                        <button>Book an online Appointment</button>
                    </div>
                </div>
                <div className='patientImgDiv'>
                    <img className='testimonialPatientImg' src={patientimg} alt='patient_img' />
                </div>
            </div>

        </>
    )
}

export default case_test