import React from "react";
import "./Register.css"; 

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Create an Account</h2>
        
        <div className="input-group">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" placeholder="Enter your name" />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the terms and conditions</label>
        </div>

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
