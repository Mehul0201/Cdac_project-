import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import '../Register/regstyle.css';

const Register = () => {
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        adhar: '',
        nationality: '',
        state: '',
        city: '',
        pincode: '',
        address: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!verified) {
            // Handle captcha verification error
            return;
        }

        try {
            // Send the formData to the backend for saving in the database
            const response = await axios.post('http://localhost:8080/userapi/registerUser', formData);
            console.log(response.data);
            // Handle success or show appropriate messages
        } catch (error) {
            console.error(error);
            // Handle error or show error messages
        }
    };

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <h1 className="text">Register</h1>
                <div className="row justify-content-center align-items-center p-5">
                    <div className='col-3'></div>
                    <div className='col bg-white p-5 shadow-lg'>
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='First Name'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Last Name'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Phone no'
                                    name='mobile'
                                    value={formData.mobile}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder='Email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='Password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder='Confirm Password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Aadhar Card No'
                                    name='adhar'
                                    value={formData.adhar}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="col-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Nationality'
                                    name='nationality'
                                    value={formData.nationality}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <select
                                    className="form-control"
                                    placeholder='Country'
                                    name='country'
                                    value={formData.country}
                                    onChange={handleFormChange}
                                >
                                    <option disabled>-- Country --</option>
                                    <option>India</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <select
                                    className="form-control"
                                    placeholder='State'
                                    name='state'
                                    value={formData.state}
                                    onChange={handleFormChange}
                                >
                                    <option disabled>-- State --</option>
                                    <option>Maharashtra</option>
                                    <option>Delhi</option>
                                    <option>Bihar</option>
                                    <option>Banglore</option>
                                    <option>Tamilnadu</option>
                                    <option>Goa</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Tamilnadu</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Pin code'
                                    name='pincode'
                                    value={formData.pincode}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="col-6">
                                <select
                                    className="form-control"
                                    placeholder='State'
                                    name='gender'
                                    value={formData.gender}
                                    onChange={handleFormChange}
                                >
                                    <option>-- Gender --</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className="col-12">
                            <textarea
                                className="form-control"
                                placeholder="Address"
                                rows="3"
                                name='address'
                                value={formData.address}
                                onChange={handleFormChange}
                            ></textarea>
                        </div>
                        <br />
                        <div className='col-12'>
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='col-12'>
                            <input
                                type="submit"
                                className="btn bg-primary w-100 rounder-0 w-75 py-2"
                                value="Register"
                                disabled={!verified}
                            />
                        </div>
                        <div className="text-center col-12">
                            <span className="text-body-secondary">Already have an account?</span>
                            <span className="text-body-secondary"><a href="Login"> Login</a></span>
                            <br />
                            <span className="text-body-secondary">Forgot Password?</span>
                            <span className="text-body-secondary"><a href="Forgot"> Forgot Password</a></span>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </form>
    );
}

export default Register;
