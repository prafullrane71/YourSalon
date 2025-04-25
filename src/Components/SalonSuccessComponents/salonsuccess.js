import { useNavigate } from "react-router-dom";
import "./salonsuccess.css";
import { IoMdArrowBack } from "react-icons/io";

function SalonSuccess () {

    const navigate = useNavigate();
    const handleBackClick=()=>{
        navigate(-1)
    }
    return(
        <>
        <div className="salonsuccess-header">
        <div className="salonsuccess-back-icon" onClick={handleBackClick}><IoMdArrowBack/> </div>
        <div class="salonsuccess-heading"><h1> Salon Success : </h1></div>
        </div>

        <div class="salon-success-main">
        <div class="salon-success-container-1">
            <div class="salon-success-img-1"><img src="../Reduce Operating Cost.png"/></div>
            <div class="salon-success-descrp-1">
                <h2>Reduce Operating Cost</h2>
                <h5>Increase efficiency of resources by automating the day-to-day operations like appointment booking, billing, employee, products and services management, etc.</h5>
            </div>
        </div>
        <div class="salon-success-container-2">
            <div class="salon-success-img-2"><img src="Measure Performance_1.png"/></div>
            <div class="salon-success-descrp-2">
                <h2>Measure Performance</h2>
                <h5>You need more than conventional reports to stabilise the revenue. Get the precise insight on the factor that is affecting your revenue, estimate its impact on revenue and take right action.</h5>
            </div>
        </div>
</div>
<div class="salon-success-second-main">
    <div class="salon-success-container-3">
            <div class="salon-success-img-3"><img src="Take Right Action.png"/></div>
            <div class="salon-success-descrp-3">
                <h2>Take Right Action</h2>
                <h5>Should you focus on up-sell, cross-sell, new customer, customer retention, stylist skill set development and reach the desire goal or just random action with un predictable result.</h5>
            </div>
        </div>
        <div class="salon-success-container-4">
            <div class="salon-success-img-4"><img src="Increase Customer Experience_1.png"/></div>
            <div class="salon-success-descrp-4">
                <h2>Increase Customer Experience</h2>
                <h5>Better Customer experience is the key factor for the success of Salons & Spas. MioSalon builds all the required features that helps to increase the Customer experience.</h5>
            </div>
        </div>
</div>
        </>
    )
}
export default SalonSuccess;