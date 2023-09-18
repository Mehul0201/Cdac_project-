import React, { useState } from 'react';
import '../Login/login.css';
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) {
      return;
    }

    try {
      // Replace with your API request logic to fetch credentials
      const response = await fetch('http://localhost:8080/userapi/getUsers');
      const data = await response.json();

      // Check if the provided credentials match the fetched credentials
      if (data.email === email && data.password === password) {
        console.log('Login successful');

        // Show success message
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });

        // Navigate to the next page ('/welcome')
        navigate('/Welcome');
      } else {
        console.log('Login failed');
        // Show error message
        toast.error('Incorrect email or password. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text">Login</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-5 bg-white p-5 shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Input fields, ReCAPTCHA, and Login button */}
            <input
              type="email"
              className="form-control bg-body-secondary border-0 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <br />

            <input
              type="password"
              className="form-control bg-body-secondary border-0"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <br />

            <div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </div>
            <br />

            {/* ... Your existing input fields and ReCAPTCHA */}
            <button
              className="btn bg-primary w-100 rounder-0 w-75 py-2"
              disabled={!verified}
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <br />
            <span className="text-body-secondary">Not Registered?</span>
            <span className="text-body-secondary"><Link to="/register"> Create an account</Link></span>
            <br />
            <span className="text-body-secondary">Forgot Password?</span>
            <span className="text-body-secondary"><Link to="/forgot"> Forgot Password</Link></span>
          </div>
        </div>
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
