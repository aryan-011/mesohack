import React from 'react';
import DirectPageTestimonials from './components/DirectPageTestimonials/DirectPageTestimonials'
import TrackAppointment from './components/trackYourAppointment/trackYourAppointment'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from './components/userProfile/profile';
import Table from './components/PatientDetails/table';


function App() {
  return (
    <BrowserRouter>
      <div>
        

        <Routes>
          <Route path="/patient-details" element={<Table/>}/>
          <Route path="/" element={<ProfilePage/>}/>
          <Route path="/track-appointments" element={<TrackAppointment/>} />
          <Route path="/doctor-list" element={<DirectPageTestimonials/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
    );
}

export default App;
