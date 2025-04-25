import "./wwo.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Wwo () {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };
    return(
        <>
        <div className="wwo-header">
        <div className="wwo-back-icon" onClick={handleBackClick}><IoMdArrowBack/> </div>
        <div class="wwo-heading"><h1>What we offer : </h1></div>
        </div>
        
        <div class="wwo-main">
        <div class="wwo.container-1">
            <div class="wwo-img-1"><img src="why.ys.1st.png"/></div>
            <div class="wwo-descrp-1">
                <h2>User-Friendly Interface</h2>
                <h5>Our software is designed with client satisfaction in mind. Simplify business functioning with our easy-to-use and user-friendly salon and spa software.</h5>
            </div>
        </div>
        <div class="wwo-container-2">
            <div class="wwo-img-2"><img src="why.ys.2nd.png"/></div>
            <div class="wwo-descrp-2">
                <h2>Analytics and Insights</h2>
                <h5>Our advanced reporting tools provide result-driven insights with comprehensive analysis. Make informed decisions to take Your Salon to new heights</h5>
            </div>
        </div>
</div>
<div class="wwo-second-main">
    <div class="wwo.container-3">
            <div class="wwo-img-3"><img src="why.ys.3rd.png"/></div>
            <div class="wwo-descrp-3">
                <h2>Customer Relationship Management</h2>
                <h5>Make your customer feel valued and supported at every stage with our beauty and hair salon software. Enhance client relationships with loyalty programs, feedback management, appointment tracking, personalized suggestions.</h5>
            </div>
        </div>
        <div class="wwo-container-4">
            <div class="wwo-img-4"><img src="why.ys.4th.png"/></div>
            <div class="wwo-descrp-4">
                <h2>Seamless Online Platform Integration</h2>
                <h5>Let your client stay connected with you on the digital platforms. Integrate social media platforms, websites, and booking portals to boost customer engagement.</h5>
            </div>
        </div>
</div>
        </>
    )
}
export default Wwo;