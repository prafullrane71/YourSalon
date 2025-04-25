import './footer.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div class="main-div">    
      <div class="footer-section">
            <div class="Main-footer">
              {/* <div><img src="footerLogo.png" alt=""/></div> */}
              <div className='footer-img'><Link to="mainsection"><img src="footerLogo.png"/></Link></div>
              <p className='footer-content'>Simplify scheduling, streamline operations, and boost profitability effortlessly. Step into the future of salon management with us ! </p>
            </div>
                <div class="Get-in-touch">
                  <h4>Get In Touch</h4>
                  <a href='https://maps.app.goo.gl/S7mQRsv4weyAPbL48?g_st=ac' style={{color:"white"}}><FaLocationDot/>&nbsp;AIC, Prestige Indore , India</a><br/>
                  <p><FaPhoneAlt/>&nbsp;+91 8770917519</p>
                  <p><SiGmail/>&nbsp;yoursalon@gmail.com</p>
                  </div>
                
                <div class="populer-links"><h4>Popular Links</h4>
                    <FaArrowCircleRight/>&nbsp;<Link to="/privacypolicy" style={{textDecoration:"none",color:"white"}}> Privacy Policy </Link><br/>
                    <a><FaArrowCircleRight/>&nbsp;Refund & Cancellation</a><br/>
                    <a><FaArrowCircleRight/>&nbsp;Terms & conditions</a><br/>
                </div>
            </div>
            <div class="footer-bottom">
                  <p>
                    &copy; <a href="#" style={{color:"white"}}>YourSalon</a> All Rights Reserved By <a href="" style={{color:"white"}}>34 ideas thinklab pvt ltd.</a>
                  </p>
              </div>
            </div>
    </>
  )
};

export default Footer;



