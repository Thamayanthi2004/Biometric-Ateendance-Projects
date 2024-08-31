import React, { useState } from 'react';
import './LoginPage.css';

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
          src="https://via.placeholder.com/400x400" // Replace with the actual image URL or import it
          alt="Graduation"
          className="login-image"
        />
        <div className="login-form">
          <h1>Hey Buddy 👋</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember me</label>
            </div>
            <button type="submit">Login to site</button>
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
