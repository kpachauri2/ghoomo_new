// App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Registration from './components/RegistrationForm';
import Login from './components/LoginForm';
import UserProfile from './components/UserProfile';
import VehicleListing from './components/VehicleListingForm';

function App() {
  return (
    <Routes>
      <div>
        <Route exact path="/" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/vehicles" component={VehicleListing} />
      </div>
    </Routes>
  );
}

export default App;

