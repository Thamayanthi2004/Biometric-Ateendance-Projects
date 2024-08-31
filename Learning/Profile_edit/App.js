import React, { useState } from 'react';
import './profileEdit.css';

const rofileEdit = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sinNumber, setSinNumber] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [batch, setBatch] = useState('');

  const handleSave = () => {
    // Handle save action here
  };

  const handleCancel = () => {
    // Handle cancel action here
  };

  return (
    <div className="profile-edit-container">
      <div className="header">
        <img src="logo.png" alt="Logo" className="logo" />
        <button className="profile-edit-button">Profile Edit</button>
      </div>
      <div className="form-container">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name here..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name here..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>College</label>
          <select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          >
            <option value="" disabled>Ex: Engineering</option>
            <option value="Engineering">Engineering</option>
            <option value="Science">Science</option>
          </select>
        </div>
        <div className="form-group">
          <label>SIN Number</label>
          <input
            type="text"
            placeholder="Ex: E21CS022"
            value={sinNumber}
            onChange={(e) => setSinNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="" disabled>Ex: 4 year</option>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
            <option value="4 years">4 years</option>
          </select>
        </div>
        <div className="form-group">
          <label>Batch</label>
          <select
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          >
            <option value="" disabled>Ex: 2021 - 2025</option>
            <option value="2021 - 2025">2021 - 2025</option>
            <option value="2022 - 2026">2022 - 2026</option>
            <option value="2023 - 2027">2023 - 2027</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="" disabled>Choose here...</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>Choose here...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="button-group">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
