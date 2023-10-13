import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <BrowserRouter>
  
     <Routes>
      {/* <Switch> */}
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        {/* Add more routes as needed */}
       {/* </Switch> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;