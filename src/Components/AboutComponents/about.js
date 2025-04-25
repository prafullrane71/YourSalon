import './about.css';
import { useState } from 'react';

function About() {
    return (
        <>
            <div className="about-heading">
                <h1 className="yoursalon-btn">
                    YourSalon : Run Your Salon Smoothly With Our Top Notch CRM Solutions
                </h1>
                <p className="about-para" style={{ fontSize: "large" }}>
                    We help small, medium, and large businesses run efficiently with our tailored salon management software.
                </p>
            </div>
            <div className="about-section">
                <div className="about-img-1">
                    <img src="./about_1st.png" alt="" />
                </div>
                <div className='about-container'>
                    <div className="container-1">
                        <div className="scroll-content-1">
                            Our mission is to assist hair, nail, and beauty salons in conducting daily business activities with ease. Transform the way you manage your salon with our cutting-edge software, designed specifically for the beauty industry.<br /><br /><br /><br /><br />
                        </div>
                    </div>
                    <br /><br />
                    <div className="container-2">
                        <div className="scroll-content-2">
                            Track your customer data, manage appointments, sales, inventories, and many more with us.Empower your salon with smarter tools, streamline operations, and deliver exceptional customer experiences effortlessly.<br /><br /><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
