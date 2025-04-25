// import './feature.css';

// function Feature(){
//     return(
//         <>
//         <div align="center">
//         <h1>Your Salon : </h1><h3>The Ultimate CRM Solutions for Hair and Beauty Salons</h3>
//         </div>
// <div class="feature-card">
// <div class="feature-1">
//         <div class="img-1"><img src="feature-1st.png" alt=""/></div>
//         <div className='middle-line'></div>
//             <div class="box-1">
//                 <h1>Appointment Management</h1>
//                 <p>Manage your customers with our specially designed appointment software for salons. Let your clients choose the staff and book their appointments with mobile apps or websites with ease.</p>
//             </div>              
// </div>
// <div class="feature-2">
//         <div class="box-2">
//         <h1>POS billing Software</h1>
//         <p>Make the checkout process smooth and error-free with our POS billing software. Automate billing calculations, manage split payments, apply personalized discounts, and many more.</p>
//         </div>
//         <div className='middle-line'></div>
//         <div class="img-2"><img src="feature-2nd.png" alt=""/></div>
// </div>
// <div class="feature-3">
//         <div class="img-3"><img src="feature-3rd.png" alt=""/></div>
//         <div className='middle-line'></div>
//         <div class="box-3">
//         <h1>Handle multiple branch with ease</h1>
//         <p>With the best salon software services in India, handle multiple salon branches efficiently. Our centralized salon management software enables clients to monitor and manage different branches in different locations with a single system.</p>
//         </div>
// </div>
// <div class="feature-4">
//         <div class="box-4">
//         <h1>Manage and boost sales</h1>
//         <p>Sales is the core of business especially when it comes to beauty spas and hair salons. With Your Salon’s CRM solutions, manage leads, automate marketing campaigns and recommendations, take follow-ups, and maximize revenues.</p>
//         </div>
//         <div className='middle-line'></div>
//         <div class="img-4"><img src="feature-4th.png" alt=""/></div>
// </div>
// <div class="feature-5">
//         <div class="img-5"><img src="feature-5th.png" alt=""/></div>
//         <div className='middle-line'></div>
//         <div class="box-5">
//         <h1>Stock management</h1>
//         <p>Make the complex inventory management process seamless with our comprehensive salon software. Our software features include inventory tracking, order management, automated notifications, product integrations, inventory reporting, and whatnot.</p>
//         </div>
// </div>
// <div class="feature-2">
//         <div class="box-6">
//         <h1>Staff management</h1>
//         <p>Enhance employee productivity and satisfaction with our salon-specific staff management software. Track attendance, leaves, feedback, and reviews of staff. Automate the complex payroll considering working hours, overtime, targets, and tax.</p>
//         </div>
//         <div className='middle-line'></div>
//         <div class="img-6"><img src="feature-6th.png" alt=""/></div>
// </div>
// <div class="feature-1">
//         <div class="img-7"><img src="feature-7th.png" alt=""/></div>
//         <div className='middle-line'></div>
//         <div class="box-7">
//         <h1>Level up your Marketing campaigns</h1>
//         <p>Boost customer visibility and online presence with our robust salon software. Create multiple marketing campaigns, automate emails and personalized messages, schedule ads, and customize promotions at a single click</p>
//         </div>
// </div>
// <div class="feature-2">
//         <div class="box-8">
//         <h1>Client membership</h1>
//         <p>Your Salon knows the importance of Membership programs for salons and spas. Increase repeat customer rate by creating, managing, tracking, and upgrading client membership. Customize Membership plans with personalized offers and discounts.</p>
//         </div>
//         <div className='middle-line'></div>
//         <div class="img-8"><img src="feature-8th.png" alt=""/></div>
// </div>
// </div>
//         </>
//     )
// }

// export default Feature;

import React from 'react';
import { data } from './data';
import FeaturesCard from './featurecard.js';

const Features = () => {

  document.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.querySelector('.animated-text');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function onScroll() {
      if (isInViewport(animatedText)) {
        animatedText.classList.add('in-view');
        window.removeEventListener('scroll', onScroll);
      }
    }
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check if the element is already in view when the page loads
  });

  return (
    <div className='feature-page'>
      <div className='features'>
      <div className='features-title animated-text'>
        <h1>Your Salon: <span>The Ultimate CRM Solutions for Hair and Beauty Salons</span></h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: "5rem" }}>
        {data.map(item => (
        //   <div key={item.id} className={feature-card ${item.id % 2 === 0 ? 'oddeven' : ''}}>
        <div>
            <FeaturesCard
              even={item.id % 2 === 0}
              imgUrl={item.imgUrl}
              heading={item.heading}
              para={item.para}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Features;