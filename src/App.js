import React from 'react';
import DirectPageTestimonials from './components/DirectPageTestimonials/DirectPageTestimonials'
import TrackAppointment from './components/trackYourAppointment/trackYourAppointment'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from './components/userProfile/profile';
import Table from './components/PatientDetails/table';
import LoginPage from './components/loginPage/loginPage';
import AppointmentForm from './components/Appointment-from/AppointmentForm';
import OfflineForm from './components/Appointment-from/OfflineForm.js';
function App() {
  return (
    <BrowserRouter>
      <div>
        

        <Routes>
          <Route path="/patient-details" element={<Table/>}/>
          <Route path="/" element={<ProfilePage/>}/>
          <Route path="/track-appointments" element={<TrackAppointment/>} />
          <Route path="/doctor-list" element={<DirectPageTestimonials/>} />
          <Route path="/login-page" element={<LoginPage/>} />
          <Route path="/offline-form" element={<OfflineForm/>}/>
          <Route path="/appointment" element={<AppointmentForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
    );
}

export default App;
