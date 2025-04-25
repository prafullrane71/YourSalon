import './bookdemo.css';
import {Link} from 'react-router-dom';

function BookDemo(){
    return(
        <>
        <div className='demo-page'>
        <div className='lets-connenct'>
        <div className='demo-logo'>
        <div className='demo-img'><Link to="mainsection">
          <img src="YourSalon_Logo-03 (1).png"/>
          </Link></div>
        <h4 style={{fontSize:"2.2vw",color:"#252525",fontfamily: "Georgia, 'Times New Roman', Times, serif",marginTop:"10px"}}>Join us for a <strong>Free demo</strong></h4>
        <p style={{marginTop:"-35px",fontfamily: "Arial, sans-serif",color: "#0e1315"}}>Sign up with YourSalon and get Free Trial for <strong>14 Days</strong>. No credit card required. No obligations or fixed-term contracts. </p>
        </div>
        <div className='demoform-main'>
        <form class="demoform-1"> 
            <div>
              <input type="text" placeholder="Full Name" required="required" style={{height:"35px",width:"290px",backgroundColor:""}}/>
            </div>
            <div>
              <input type="email" placeholder="Address" required="required" style={{height:"35px",width:"290px"}}/>
            </div>
            <div>
              <input type="text" placeholder="No of Branches" required="required" style={{height:"35px",width:"290px",backgroundColor:""}}/>
            </div>
            <div>
              <input type="date" required="required" style={{height:"35px",width:"290px"}}/>
            </div>
            <div>
              <input type="password" placeholder="Your Password" required="required" style={{height:"35px",width:"290px"}}/>
            </div>
          </form>
          <form class="demoform-2">
            <div>
              <input type="text" placeholder="Business Name" required="required" style={{height:"35px",width:"290px",backgroundColor:""}}/>
            </div>
            <div>
              <input type="email" placeholder="Email" required="required" style={{height:"35px",width:"290px"}}/>
            </div>
            <div>
              <input type="text" placeholder="No of Staff" required="required" style={{height:"35px",width:"290px",backgroundColor:""}}/>
            </div>
            <div>
              <input type="time" required="required"style={{height:"35px",width:"290px"}}/>
            </div>
            <div>
              <textarea type="text" placeholder='Your Query' style={{height:"35px",width:"290px",marginTop:"5px"}}></textarea>
            </div>
          </form>
          </div>
          <button className='signup-button'>Book A Free Demo</button>
          <p className='already-acc'>Already have an account ? LOG IN </p>
        </div>
        <div className='our-brands'>
            <div className='demo-title'>
            <h3>YourSalon - A complete CRM built to increase your revenue.</h3>
            </div>
            <div className='brands'>
            <h5>Trusted by 100+ businesses across 10 cities PAN india.</h5>
            </div>
            <div className='brands-imgs-part1'>
                <div className='brand-img-1'><img src="headmasterlogo2.png" alt=""/></div>
                <div className='brand-img-2'><img src="Thelondonsalon.logo.png" alt=""/></div>
                <div className='brand-img-3'><img src="Allure_Logo.png" alt=""/></div>
            </div>
            <div className='brands-imgs-part2'>
                <div className='brand-img-1'><img src="Bhanus.logo.png" alt=""/></div>
                <div className='brand-img-2'><img src="kiralogo.png" alt=""/></div>
                <div className='brand-img-33'><img src="matrix.logo.png" alt=""/></div>
            </div>
            <p className='copyright'>Copyright © 2024 YourSalon.io | All Rights Reserved.</p>
        </div>
        </div>
        </>
    )
};

export default BookDemo;