import React from 'react';
import ReactDOM from 'react-dom';
import {  Routes } from 'react-router-dom'; // Import BrowserRouter from React Router
import App from './App'; // Assuming your main application component is named 'App'
ReactDOM.render(
  <Routes>
    <App />
  </Routes>,
  document.getElementById('root')
);
