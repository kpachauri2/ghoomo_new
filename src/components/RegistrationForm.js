import React, { useState } from 'react';
import './css/formstyle.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the registration data to the server (backend) for processing.
    // You'll implement this later when setting up the backend.
  };

  return (
<div className="form-container">
  <form>
    <div className="form-input">
      <label className="form-label" htmlFor="username">
        Username
      </label>
      <input type="text" id="username" />
    </div>

    <div className="form-input">
      <label className="form-label" htmlFor="password">
        Password
      </label>
      <input type="password" id="password" />
    </div>

    <button className="submit-button" type="submit">
      Submit
    </button>
  </form>
</div>

  );
}

export default RegistrationForm;
