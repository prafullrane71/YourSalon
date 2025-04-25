import './pricing.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

function Pricing() {
  const [activeAnswer, setActiveAnswer] = useState('');

  function handleClick(queId) {
    setActiveAnswer((prevId) => (prevId === queId ? '' : queId));
  }

  return (
    <>
      <div className="Pricing-heading">
        <h1>Pricing that Fits Every Business :</h1>
        <div className="sub-heading">Best Affordable Plans To Manage Your Business Efficiently</div>
      </div>
      <div className="writen-content">
        <p>
          <strong style={{color:"darkorange"}}>Customize your growth path :</strong> Discover our CRM pricing tiers. Explore a range of scalable CRM pricing tiers tailored to fit your business needs. Unlock the power of customization and chart your path to sustainable growth with our flexible pricing options.
        </p>
      </div>
      <div className="pricing-container">
        <div className="rounded text-center pricing-table table-1">
          <h2>Quarterly Package</h2>
          <h3><span>₹</span> 1500 per month</h3>
          <p>Get a 7 days free trial as well</p>
          <h2>Pricing: 4500 ₹</h2>
          <a href="#" className="btn pricing-btn px-2">Get Started</a>
        </div>
        <div className="rounded text-center pricing-table table-2">
          <h2>Half-Yearly Package</h2>
          <h3><span>₹</span> 1200 per month</h3>
          <p>Get a 7 days free trial as well</p>
          <h2>Pricing: 7200 ₹</h2>
          <a href="#" className="btn pricing-btn px-2">Get Started</a>
        </div>
        <div className="rounded text-center pricing-table table-3">
          <h2>Yearly Package</h2>
          <h3><span>₹</span> 1000 per month</h3>
          <p>Get a free shoot of your salon by our professionals + Free internet marketing + Get a 7 days free trial as well.</p>
          <h2>Pricing: 12000 ₹</h2>
          <a href="#" className="btn pricing-btn px-2">Get Started</a>
        </div>
      </div>
      <div className="questions">
        <div className='f-questions'><h1>Frequently Asked Questions?</h1>
        <p style={{ fontSize: 'large' }}>Have a question? We're here to help.</p></div>
        
        <div className="que-1">
          <p style={{ fontSize: 'larger' }}>
            How to get a software demo ?
            {activeAnswer === 'ans1' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans1')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans1')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans1' ? 'active' : ''}`}>
            To book a demo click on Free Demo Button in Menu section.
          </div>
        </div>
        
        <div className="que-2">
          <p style={{ fontSize: 'larger' }}>
            How safe is my data ?
            {activeAnswer === 'ans2' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans2')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans2')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans2' ? 'active' : ''}`}>
            We take security seriously and you get to choose your data center from the get-go. Our servers are hosted in world-class data centers that are protected by biometric locks and 24-hour surveillance. We ensure that our application is always up to date with the latest security patches. All YourSalon plans include SSL for encryption, for FREE, to keep your data safe.
          </div>
        </div>
        
        <div className="que-3">
          <p style={{ fontSize: 'larger' }}>
            Is there any limit to Billings & appointments ?
            {activeAnswer === 'ans3' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans3')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans3')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans3' ? 'active' : ''}`}>
            There is no limit to create infinite number of bills.
          </div>
        </div>
        
        <div className="que-4">
          <p style={{ fontSize: 'larger' }}>
            Do you serve our location ?
            {activeAnswer === 'ans4' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans4')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans4')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans4' ? 'active' : ''}`}>
            Well, we are based at Indore (India), but we serve PAN India. We have clients in town & cities like: Bangalore, Gurgaon, Delhi, Jaipur, Bhopal, Ratlam, Katni, Ujjain.
          </div>
        </div>
        
        <div className="que-5">
          <p style={{ fontSize: 'larger' }}>
            Why are we unique ?
            {activeAnswer === 'ans5' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans5')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans5')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans5' ? 'active' : ''}`}>
            We have primarly : [1] All In One Plan. [2] Training & Supports. [3] No Restrictions on usage & users.
          </div>
        </div>
        
        <div className="que-6">
          <p style={{ fontSize: 'larger' }}>
            Do you have any cancellation fees ?
            {activeAnswer === 'ans6' ? (
              <FaMinus className="icons minus" onClick={() => handleClick('ans6')} />
            ) : (
              <FaPlus className="icons plus" onClick={() => handleClick('ans6')} />
            )}
          </p>
          <div className={`answer-content ${activeAnswer === 'ans6' ? 'active' : ''}`}>
            No. YourSalon is a pay-as-you-go service. We do not have any cancellation fees. You can cancel whenever you want but your cancellation will come into effect only after the end of your term.
          </div>
        </div>
        
        <br /><br />
      </div>
    </>
  );
}

export default Pricing;
