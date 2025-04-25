import "./salonauto.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SalonAuto () {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };
    return(
        <>
        <div className="salonauto-header">
        <div className="salonauto-back-icon" onClick={handleBackClick}><IoMdArrowBack/> </div>
        <div class="salonauto-heading"><h1> Salon Automation : </h1></div>
        </div>

        <div class="salonauto-main">
        <div class="salonauto-container-1">
            <div class="salonauto-img-1"><img src="247 online booking_1.png"/></div>
            <div class="salonauto-descrp-1">
                <h2>24/7 online booking using web</h2>
                <h5>Our software is designed with client satisfaction in mind. Simplify business functioning with our easy-to-use and user-friendly salon and spa software.</h5>
            </div>
        </div>
        <div class="salonauto-container-2">
            <div class="salonauto-img-2"><img src="Appointment Confirmation Notification_1.png"/></div>
            <div class="salonauto-descrp-2">
                <h2>Appointment Confirmation Notification</h2>
                <h5>Our advanced reporting tools provide result-driven insights with comprehensive analysis. Make informed decisions to take Your Salon to new heights</h5>
            </div>
        </div>
</div>
<div class="salonauto-second-main">
    <div class="salonauto-container-3">
            <div class="salonauto-img-3"><img src="Feedback from customer_1.png"/></div>
            <div class="salonauto-descrp-3">
                <h2>Feedback from customer</h2>
                <h5>Make your customer feel valued and supported at every stage with our beauty and hair salon software. Enhance client relationships with loyalty programs, feedback management, appointment tracking, personalized suggestions.</h5>
            </div>
        </div>
        <div class="salonauto-container-4">
            <div class="salonauto-img-4"><img src="Low inventory alert_1.png"/></div>
            <div class="salonauto-descrp-4">
                <h2>Low inventory alert</h2>
                <h5>Let your client stay connected with you on the digital platforms. Integrate social media platforms, websites, and booking portals to boost customer engagement.</h5>
            </div>
        </div>
</div>
        </>
    )
}
export default SalonAuto;