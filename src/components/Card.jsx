import "../styles/destination.css"
import { useDispatch } from "react-redux";
import { changeTradeState } from "../feature/trade";
import { changeOverLayState } from "../feature/overLay";
import { changeInfoState } from "../feature/info";
import { changeInfoDataState } from "../feature/infoData";
function Card ({ topIcon,indicator,label,amount,rate }){
const dispatch = useDispatch();
function viewData(topIcon,indicator,label,amount,rate) {
   dispatch(changeTradeState(true));
   dispatch(changeInfoState(false));
   dispatch(changeOverLayState(true));
   dispatch(
     changeInfoDataState({
       "topIcon": topIcon,
      "indicator": indicator,
       "label": label,
      "amount": amount,
       "rate": rate,
     })
   );
 }
   return <div className="card" onClick={()=>{
      viewData(topIcon,indicator,label,amount,rate)
   }}>
   <div className="card-top-section">
<div className="icon">
    <img src={topIcon}/>
</div>
<div className="indicator">
<img src={rate}/>
</div>
   </div>
   <div className="second-section">
   <p className="text-[#898989] text-xl">{label}</p>
   <p className="card-amount">{amount}</p>

   </div>
   <div className="footer">
<div>
<img src={indicator}/>
</div>
<p className="text-neutral font-bold">&nbsp; vs. previous month</p>

   </div>

   </div> 
}

export default Card