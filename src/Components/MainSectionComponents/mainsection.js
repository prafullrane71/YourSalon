import React from 'react';
import './mainsection.css';
import girlImg from "../../Assets/images/GirlwithDashboard-02.png";
import orangeBlock from "../../Assets/images/orangeBlock_Colors-01.png";
import blueBlock from "../../Assets/images/tealBlock_Colors-03.png";
import purpleBlock from "../../Assets/images/blueBlock_Colors-03.png";
import yellowBlock from "../../Assets/images/yellowBlock_Colors-04.png";
import Footer from '../FooterComponents/footer';
import About from '../AboutComponents/about';
import Features from '../FeaturesComponents/feature';
import Pricing from '../PricingComponents/pricing';
import Enquiry from '../EnquiryComponents/enquiry';
import Wwo from '../WwoComponents/wwo';

const MainSection = () => {
  return (
    <>
    <br/><br/>
    <div className='hero-section-container'>
      <div className='banner'>
        <div className='hero-section-img'>
          <img src={girlImg} alt='' />
        </div>
        <div className='heroSection-content'>
          <div className='hero-section-title'>
            <h1 className='your-class'>YourSalon</h1>
            <h3 className='ft-bold'> Your Salon is a 360 degree solution <br/>to transform your journey to digital excellence!</h3>
            <h5 className='ft-bold'>Embrace the power of automation with our <br/>exceptional salon software!</h5>
          </div>
        </div>
      </div>
      <div className='dashboard-blocks'>
        <div className='orange-block'>
          <img src={orangeBlock} alt='' />
        </div>
        <div className='blue-block'>
          <img src={blueBlock} alt='' />
        </div>
      </div>
      <div className='dashboardTwo-block'>
        <div className='purple-block'>
          <img src={purpleBlock} alt='' />
        </div>
        <div className='yellow-block'>
          <img src={yellowBlock} alt='' />
        </div>
      </div>
    </div>
    <About/>
    <Features/>
    <Pricing/>
    <Wwo/>
    <Enquiry/>
    </>
  );
};

export default MainSection;