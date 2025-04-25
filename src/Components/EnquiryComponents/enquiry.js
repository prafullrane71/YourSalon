import './enquiry.css';
import Nav from '../NavComponents/nav';
import { FaPhoneAlt } from "react-icons/fa";

function Enquiry(){
    return(
        <>
  <div className='enquiry-resp'>
  <div className='enquiry-main'>
    <div className='enquiry-part-1'>
      <h1>Have questions ?<br/>
      Need help ?<br/>
      Talk to us.</h1>
  <p className='font-content'>The YourSalon sales team can be reached at +91 8770917519. You can also reach out to us via e-mail at yoursalon@gmail.com <br/><br/>For current customers, click here for information on accessing product support. Or Simply fill out the form, and we’ll get in touch as soon as possible.</p>

    </div>
  <div className='enquiry-part-2'>
  <div className='inside-form'>
    <div className='form-heading'><p style={{textAlign:"center"}}>Have aA Question ? <strong>Ask Away !</strong></p><br/></div>
    <div className='contact-demo-1'>
    <div className='info-1'> 
      <input className='first-name' type="text" placeholder=" First Name" required="required"/>
      <input className='phone-no' type="text" placeholder=" Phone No" required="required"/>
    </div>
    <div className='info-2'>
      <input className='last-name' type="text" placeholder=" Last Name" required="required"/>
      <input className='buss-name' type="text" placeholder=" Business Name" required="required"/>
    </div>
    </div>
    <div className=''>
    <input className='buss-email' type="text" placeholder=" Business Email" required="required"/>
    <input className='buss-type' type="text" placeholder=" Business Type" required="required"/>
    </div>
    <div className='contact-demo-2'>
    <div className='date'>
    <input type="date" required="required"/>
    </div>
    <div className='time'>
    <input type="time" required="required"/>
    </div>
    </div>
    <div className='query'>
        <textarea type="text" placeholder=' Your Query'></textarea>
    </div>

    <div><button class="submit-button" type="submit">Submit Now</button></div>
    
</div>
  </div>

</div>

<div className='location'>
  <div className='location-box'>
  <div className='location-part-1'>
    <div class="side-line">
          <h1 style={{fontWeight: "400"}}>Registered Address</h1>
            <p>70 Anoop Nagar, Indore, India 452011</p>
          <br/>
            <h1 style={{fontWeight: "400"}}>Office Address</h1>
            <p>AIC 3rd Floor, Scheme No. 78, Indore, India 452010</p>
            <br/>
    </div>
  </div>

  <div className='location-part-2'>
  <a href='https://maps.app.goo.gl/S7mQRsv4weyAPbL48?g_st=ac' style={{textDecoration:"none",fontFamily: "inherit"}}>
  <p style={{fontWeight: "600",fontSize: "2.0vw"}}><strong>34 Ideas Thinklab</strong> pvt ltd.</p>
  <p style={{marginTop:"-25px"}}> AIC 3rd Floor, Scheme No. 78, Vijaynagar, Indore.</p>
  <img className='location-img' src="aic.jpeg" alt=""/>
  </a>
  <div><button class="Call-button" style={{fontFamily: "inherit"}} type="Call-Now"> <FaPhoneAlt className='call-button-icon'/>  Call Now ! +91 877-091-7519</button></div>
  </div>
  </div>
</div>
</div>

        </>
    )
};

export default Enquiry;