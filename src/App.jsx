import Loader from "./pages/Loader"
import "./styles/destination.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTradeState } from "./feature/trade";
import { changeOverLayState } from "./feature/overLay";
import { changeInfoState } from "./feature/info";
import { changeInfoDataState } from "./feature/infoData";
import InvoiceData from "./components/InvoiceData";

function App() {
  const overlay = useSelector((state) => state.overLay.value);
  const trade = useSelector((state) => state.tradeLay.value);
  const info = useSelector((state) => state.infoLay.value);
  const infoData= useSelector((state) => state.infoLayData.value);
  const dispatch = useDispatch();
function removeOverLay(){
  dispatch(changeTradeState(false));
  dispatch(changeInfoState(false));
  dispatch(changeOverLayState(false));
  dispatch(
    changeInfoDataState({
    })
  )
}

  return (
<>
<Loader/>
{
  overlay?<div className="over-lay hover:cursor-pointer" onClick={removeOverLay}>
<div className="overlay-inner">
<div className="overlay-content dark:bg-element-dark">
{
  info?<div className="info-data dark:bg-element-dark dark:text-gray-400">
  <header className="overLay-header">
  <p className="font-lato invoice-title">Invoice</p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
</svg>


  </header>
 <div className="info-data-second-half">
 <div className="title-img-container">
<p className="title"></p>
<img src={infoData.image}/>
 </div>
 <InvoiceData value={infoData.name} title="Name"/>
<InvoiceData value={infoData.date} title="Date"/>
<InvoiceData value={infoData.amount} title="Amount"/>
<InvoiceData value={infoData.status} title="Status"/>
</div>
<footer>{infoData.status=="Refund"?"REFUND WAS SUCCESSFULLY":"PAYMENT COMPLETED"} 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[400px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</footer>

  </div>:trade?<div className="trade dark:bg-element-dark dark:text-gray-400">
  <h1>{infoData.label}</h1>
  <div className="card-top-section-trade">

    <img src={infoData.topIcon}/>

<img src={infoData.rate}/>

   </div>
   <div className="second-section-price">
   <p>{infoData.amount}</p>

   </div>
   <div className="footer">
<div>
<img src={infoData.indicator}/>
</div>
<p>&nbsp; vs. previous month</p>

   </div>

  </div>:""
}


</div>

</div>

  </div>:""
}

  
</>
  )
}

export default App
