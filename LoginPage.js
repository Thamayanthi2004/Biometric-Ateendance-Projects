import React, { useState } from 'react';
import './LoginPage.css';
import img from "../src/assests/college.png"

function LoginPage() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Student ID:', studentId);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src={img} // Replace with the actual image URL or import it
          alt="Graduation"
          className="login-image"
        />
        <div className="login-form">
          <h1 >Hey Buddy 👋</h1>
          <p>Your Journey to Success Begins with a Single Step</p>
          <form onSubmit={handleSubmit} className='form'>
            <div className='inputdiv'>
            <input
            className='name'
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            </div>
            <div  className="inputdiv">
            <input
            className='pass'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
    <div className='remember-me'>
  <input
    type="checkbox"
    checked={rememberMe}
    onChange={(e) => setRememberMe(e.target.checked)}
    id="remember"
  />
  <label for="remember">Remember me</label>
</div>
          <div className='btnDiv'>
            <button type="submit" className='btn'>Login to site</button>
            </div>  
          </form>
          <p className="contact-admin">
            Facing issues? Please contact admin <a href="mailto:admin@example.com">admin@example.com</a>
          </p>
          
        </div>
      </div>
    </div>
   
  );
}

export default LoginPage;
