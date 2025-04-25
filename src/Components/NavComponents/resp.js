// import { Link, useLocation } from 'react-router-dom';
// import './nav.css';
// import { useState } from 'react';
// import { BiSolidOffer } from "react-icons/bi";
// import { MdAutoFixHigh } from "react-icons/md";
// import { BsArrowUpRightCircleFill } from "react-icons/bs";
// import { MdOutlineManageHistory } from "react-icons/md";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);
//   const location = useLocation();

//   function handleMouseOver() {
//     clearTimeout(timeoutId)
//     setIsOpen(true);
//   }

//   function handleMouseOut() {
//     const id = setTimeout(() => {
//       setIsOpen(false);
//     }, 1000); // 1 seconds delay
//     setTimeoutId(id);
//   }

//   const handleToggleHamburgerMenu = () => {
//     setIsHamburgerOpen(prev => !prev);
//   };

//   if (["/about", "/features", "/whyys", "/pricing", "/enquiry"].includes(location.pathname)) {
//     return null;
//   }

if (location.pathname === "/bookdemo") {
  return null;
}
if (location.pathname === "/wwo") {
  return null;
}
if (location.pathname === "/salonsuccess") {
  return null;
}
if (location.pathname === "/salonauto") {
  return null;
}
if (location.pathname === "/salonmanage") {
  return null;
}
//   return (
//     <>
//       <div className={`Nav-series h-nav-resp .v-class-resp ${isHamburgerOpen ? 'open' : ''}`}>
//         <div className="nav-img">
//           <Link to="mainsection">
//             <img src="YourSalon_Logo-03 (1).png" alt="Your Salon Logo" />
//           </Link>&nbsp;&nbsp;
//         </div>
//         <div className={`nav-item h-nav-resp .v-class-resp ${isHamburgerOpen ? 'active' : ''}`}>
//           <Link className="nav-headings" to="/about">About Us</Link>
//           <Link className="nav-headings" to="feature">Features</Link>
//           <div className="dropdown" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
//             <div className="nav-headings dropdown-button">Why Your Salon?</div>
//             {isOpen && (
//               <ul className="dropdown-menu">
//               <div className='why-ys-drop'>
//                 <div className='whyys-drop1'>
//                   <div className='why-ys-1'>
//                     <BiSolidOffer className='wwo-icon' />
//                     <Link to="/wwo" style={{ textDecoration: "none" }} className='offer'>What We Offer ?
//                       <p>Ready to explore how our salon software can amplify your business growth ? if you cannot manage your salon, staff and clients effectively, your business will cease to exist.</p>
//                     </Link>
//                   </div>
//                   <div className='why-ys-2'>
//                     <BsArrowUpRightCircleFill className='success-icon' />
//                     <Link to="/salonsuccess" style={{ textDecoration: "none" }}>Salon Success
//                       <p>We are happy to share some of our premium brands like London Salon, Bhanu's, Kira Exotica, Nikisha's and more salons are out performing the other brands in the industry on offering better customer experience.</p>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className='whyys-drop2'>
//                   <div className='why-ys-3'>
//                     <MdAutoFixHigh className='automation-icon' />
//                     <Link to="/salonauto" style={{ textDecoration: "none" }}>Salon Automation
//                       <p>Salon automation is all about one thing: To give you the time and energy to focus on solving more intelligent problems, understanding and responding to customer needs, building relationships, and working on the next big thing.</p>
//                     </Link>
//                   </div>
//                   <div className='why-ys-4'>
//                     <MdOutlineManageHistory className='management-icon' />
//                     <Link to="/salonmanage" style={{ textDecoration: "none" }}>Salon Management Guid
//                       <p>Adding customer data and services, and finding it later for marketing has never been so simple and quick. We receive inquires 24/7.  all information is tracked by YOURSALON even in off-hours since it is completely online</p>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </ul>
//             )}
//           </div>
//           <Link className="nav-headings" to="/pricing">Pricing</Link>
//           <Link className="nav-headings" to="/enquiry">Enquiry</Link>
//         </div>
//         <button className="demo-btn">
//           <Link to="/bookdemo">Book Demo</Link>
//         </button>
//       </div>

//       <div className="burger" onClick={handleToggleHamburgerMenu}>
//         <div className='line'></div>
//         <div className='line'></div>
//         <div className='line'></div>
//       </div>
//     </>
//   );
// }

// export default Nav;

import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import { useState, useEffect } from 'react';
import { BiSolidOffer } from "react-icons/bi";
import { MdAutoFixHigh } from "react-icons/md";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdOutlineManageHistory } from "react-icons/md";

function Nav() {
const [isOpen, setIsOpen] = useState(false);
const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
const [clickTimeout, setClickTimeout] = useState(null);
const location = useLocation();

const handleMouseOver = () => {
  clearTimeout(clickTimeout);
  setIsOpen(true);
};

const handleMouseOut = () => {
  const id = setTimeout(() => {
    setIsOpen(false);
  }, 1000); // 1 second delay
  setClickTimeout(id);
};

const handleToggleHamburgerMenu = () => {
  // Check if the menu is already open
  if (isHamburgerOpen) {
    // If it's open, hide it on double click
    setIsHamburgerOpen(false);
  } else {
    // If it's closed, open it and set a timer to close it if not clicked again
    setIsHamburgerOpen(true);
    clearTimeout(clickTimeout);
    const timeoutId = setTimeout(() => {
      setIsHamburgerOpen(false);
    }, 3000); // Keep it open for 3 seconds unless double-clicked
    setClickTimeout(timeoutId);
  }
};

useEffect(() => {
  return () => {
    clearTimeout(clickTimeout); // Clear timeout on component unmount
  };
}, [clickTimeout]);

const hiddenPaths = ["/about", "/features", "/whyys", "/pricing", "/enquiry", "/bookdemo", "/wwo", "/salonsuccess", "/salonauto", "/salonmanage"];
if (hiddenPaths.includes(location.pathname)) {
  return null;
}

return (
  <>
    <div className={`Nav-series h-nav-resp ${isHamburgerOpen ? 'open' : ''}`}>
      <div className="nav-img">
        <Link to="mainsection">
          <img src="YourSalon_Logo-03 (1).png" alt="Your Salon Logo" />
        </Link>&nbsp;&nbsp;
      </div>
      <div className={`nav-item h-nav-resp ${isHamburgerOpen ? 'active' : ''}`}>
        <Link className="nav-headings" to="/about">About Us</Link>
        <Link className="nav-headings" to="feature">Features</Link>
        <div className="dropdown" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
          <div className="nav-headings dropdown-button">Why Your Salon?</div>
          {isOpen && (
            <ul className="dropdown-menu">
              <div className='why-ys-drop'>
                <div className='whyys-drop1'>
                  <div className='why-ys-1'>
                    <BiSolidOffer className='wwo-icon' />
                    <Link to="/wwo" style={{ textDecoration: "none" }} className='offer'>What We Offer ?
                      <p>Ready to explore how our salon software can amplify your business growth? If you cannot manage your salon, staff, and clients effectively, your business will cease to exist.</p>
                    </Link>
                  </div>
                  <div className='why-ys-2'>
                    <BsArrowUpRightCircleFill className='success-icon' />
                    <Link to="/salonsuccess" style={{ textDecoration: "none" }}>Salon Success
                      <p>We are happy to share some of our premium brands like London Salon, Bhanu's, Kira Exotica, Nikisha's and more salons are outperforming other brands in the industry by offering better customer experience.</p>
                    </Link>
                  </div>
                </div>
                <div className='whyys-drop2'>
                  <div className='why-ys-3'>
                    <MdAutoFixHigh className='automation-icon' />
                    <Link to="/salonauto" style={{ textDecoration: "none" }}>Salon Automation
                      <p>Salon automation is all about one thing: To give you the time and energy to focus on solving more intelligent problems, understanding and responding to customer needs, building relationships, and working on the next big thing.</p>
                    </Link>
                  </div>
                  <div className='why-ys-4'>
                    <MdOutlineManageHistory className='management-icon' />
                    <Link to="/salonmanage" style={{ textDecoration: "none" }}>Salon Management Guide
                      <p>Adding customer data and services, and finding it later for marketing has never been so simple and quick. We receive inquiries 24/7. All information is tracked by YOURSALON even in off-hours since it is completely online.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </ul>
          )}
        </div>
        <Link className="nav-headings" to="/pricing">Pricing</Link>
        <Link className="nav-headings" to="/enquiry">Enquiry</Link>
      </div>
      <button className="demo-btn">
        <Link style={{"textDecoration":"none"}} to="/bookdemo">Book Demo</Link>
      </button>
    </div>

    <div className="burger" onClick={handleToggleHamburgerMenu}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </div>
  </>
);
}

export default Nav;


