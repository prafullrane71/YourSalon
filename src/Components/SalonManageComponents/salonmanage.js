import "./salonmanage.css";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function SalonManage () {

    const navigate = useNavigate();
    const handleBackClick = () =>{
        navigate(-1);
    }
    return(
        <>
        <div className="salonmanage-header">
        <div className="salonmanage-back-icon" onClick={handleBackClick}><IoMdArrowBack/> </div>
        <div class="salonmanage-heading"><h1> Salon Management Guid : </h1></div>
        </div>

        <div class="salonmanage-main">
        <div class="salonmanage-container-1">
            <div class="salonmanage-img-1"><img src="Effective Staff Management_1.png"/></div>
            <div class="salonmanage-descrp-1">
                <h2>Effective Staff Management</h2>
                <h5>A crucial part of employee management is hiring and training. The secret to enhance the profitability of your salon is by hiring individuals that have a good personality with sound work ethics.</h5>
            </div>
        </div>
        <div class="salonmanage-container-2">
            <div class="salonmanage-img-2"><img src="Salon Client Retention.png"/></div>
            <div class="salonmanage-descrp-2">
                <h2>Salon Client Retention</h2>
                <h5>Incorporating a loyalty program is the best way to appreciate your customers for their repeated business. From merchandise and free treatments to discount coupons, you can shape your rewards program to enhance client retention.</h5>
            </div>
        </div>
</div>
<div class="salonmanage-second-main">
    <div class="salonmanage-container-3">
            <div class="salonmanage-img-3"><img src="Dealing with unhappy clients..png"/></div>
            <div class="salonmanage-descrp-3">
                <h2>Dealing with unhappy clients</h2>
                <h5>At some point in the beauty business, you will have to deal with a disgruntled customer. Instead of losing your cool, approach the situation with a calm state of mind. Be patient, hear them out, sympathise with them and try to resolve the issue. Doing this will enhance the likelihood of them returning to your salon the next time.</h5>
            </div>
        </div>
        <div class="salonmanage-container-4">
            <div class="salonmanage-img-4"><img src="Fun Activities to Reduce Salon Staff Burnout_1.png"/></div>
            <div class="salonmanage-descrp-4">
                <h2>Fun Activities to Reduce Salon Staff Burnout</h2>
                <h5>In the beauty business, it is easy for employees to burnout. Owing to their busy schedules and nature of their job, they tend to feel stressed mentally and physically. As a salon owner or manager, it is your duty to ensure their welfare is taken care of.</h5>
            </div>
        </div>
</div>
        </>
    )
}
export default SalonManage;