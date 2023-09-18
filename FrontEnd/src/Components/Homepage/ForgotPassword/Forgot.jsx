import React,{useState} from 'react';

import ReCAPTCHA from "react-google-recaptcha";
import '../ForgotPassword/Forgot'

const Forgot =() =>
{
    const[verfied, setVerifed] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return(
    <div class="container-fluid">
    <h1 className="text">Fogot Password</h1>
          <div class="row justify-content-center align-items-center"  >
              <div class="col-5 bg-white p-5 shadow-lg" >
                  <input type="text" class="form-control bg-body-secondary border-0 py-2" placeholder="Username"/>
                  <br/>
                  <input type="number" class="form-control bg-body-secondary border-0 py-2" placeholder="Enter OTP"/>
                  <br/>
                  <input type="password" class=" form-control  bg-body-secondary border-0 " placeholder="Password"/>
                  <br/>
                  <input type="password" class=" form-control  bg-body-secondary border-0 " placeholder="Confirm Password"/>
                  <br/>
                  <div className="">
                        <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                        />
                    </div>
                    <br/>
                  <button class="btn bg-primary w-100 rounder-0 w-75 py-2" disabled={!verfied}>Submit</button>
                  <div class="text-center" >
                      <br/>
                      <span class="text-body-secondary">Not Registered?</span>
                      <span class="text-body-secondary"><a href="Register"> Create an account</a></span>
                      <br/>
                      <span class="text-body-secondary">Alread have an account?</span>
                      <span class="text-body-secondary"><a href="Login"> Login</a></span>
                  </div>
              </div>
          </div>
          <br/>
          <br/>
          <br/>
      </div>
  );
}


export default Forgot;