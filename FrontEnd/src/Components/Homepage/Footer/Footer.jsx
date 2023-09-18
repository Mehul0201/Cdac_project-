import React from 'react';
import '../Footer/footer.css';
import logo from '../Navbar/logo.jpeg';
const Footer = () => {
  return (
      <footer>
        <div class="row main-foot pt-2">
          <div className='col-1 '>
          <p><img src= {logo} style={{ height:"3rem",width:"50px" }}></img></p>
          </div>
          <div className="col-2 heading">
            <p className='fw-bold'><i>Tours & Guide</i></p>
            <p>Copyright &copy; 2023 Tours & Guide</p>
            <p>Authority. All rights reserved</p>
          </div>
          <div class="col-3">
              <ul type="none"><p class="fw-bold fs-3">Contact Us</p>
                <li><a href="Aboutus">About Us</a></li>
                <li>Our Team</li>
                <li>Careers</li>
              </ul>
          </div>
          <div class="col-3">
              <ul type="none"><p class="fw-bold fs-3">Support</p>
              <li>Contact Us</li>
              <li>Review</li>
              <li>How to Book</li>
              </ul>
          </div>
          <div class="col-3">
              <ul type="none"><p class="fw-bold fs-3">About</p>
                  <li>Team</li>
                  <li>Locations</li>
                  <li>Team feature</li>
                  <li>Privacy</li>
                  <li>Terms</li>
              </ul>
          </div>
        </div>
      </footer>
  );
};

export default Footer;