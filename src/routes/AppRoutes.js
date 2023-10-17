// AppRoutes.js
import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Registration from '../components/RegistrationForm';
import Login from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import VehicleListing from '../components/VehicleListingForm';

const AppRoutes = () => (
    <BrowserRouter>
  <Routes>
   
      <Route path="/register" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/vehicles" component={VehicleListing} />
    
  </Routes>
  </BrowserRouter>
);

export default AppRoutes;
