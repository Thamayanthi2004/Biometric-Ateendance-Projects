import React, { useState } from 'react';
import './ODForm.css';
import logo from './logo.png'; // Ensure this path is correct
import img2 from './img2.png';

const ODForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    studentName: '',
    sinNumber: '',
    emailId: '',
    leaveType: '',
    reason: '',
    duration: '',
    startDate: '',
    endDate: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages
  const [showPopup, setShowPopup] = useState(false); // State to manage the success popup display

  // Handles input changes and updates state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage(''); // Clear errors when user starts typing
  };

  // Function to validate the email format
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  // Main action function for the "Apply" button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate each field to ensure they are not empty
    if (
      !formData.studentName ||
      !formData.sinNumber ||
      !formData.emailId ||
      !formData.leaveType ||
      !formData.reason ||
      !formData.duration ||
      !formData.startDate ||
      !formData.endDate
    ) {
      setErrorMessage('Please fill in all fields.');
      return; // Stop further execution if validation fails
    }

    // Check if the email is in a valid format
    if (!validateEmail(formData.emailId)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Show success popup if all fields are correctly filled
    setShowPopup(true);
  };

  // Action for cancel button to clear the form and reset errors
  const handleCancel = () => {
    setFormData({
      studentName: '',
      sinNumber: '',
      emailId: '',
      leaveType: '',
      reason: '',
      duration: '',
      startDate: '',
      endDate: '',
    });
    setErrorMessage(''); // Clear any error messages
  };

  // Action to close the success popup
  const handleClosePopup = () => {
    setShowPopup(false);
    handleCancel(); // Clear the form after closing the popup
  };

  return (
    <div className="od-form-container">
      <div class="od-form-header">
  <div class="nav">
    <img src={logo} alt="College Logo" class="clg-logo"/>
  </div>
  <div className="log">
      <h2 class="apply-od">Apply OD</h2>
    </div>
    {/* <div class="head">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" height="30px">
        <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z"></path>
        <path fill-rule="evenodd" d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z" clip-rule="evenodd"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="30px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
      </svg>
    </div> */}
    <div className="cancel">
      <img src={img2} alt="Cancel Logo" class='cancel-logo'className="cancel"/>
      
      

    </div>
  </div>



      
      <form className="od-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Student Name</label>
            <input
              className="input"
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>SIN Number</label>
            <input
              type="text"
              name="sinNumber"
              value={formData.sinNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Leave Type</label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="button-group">
          <button type="submit" className="apply-button">
            Apply
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Successfully Applied!</h3>
            <p>Your OD application has been submitted successfully.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ODForm;