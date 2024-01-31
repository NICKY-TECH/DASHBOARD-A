import Loader from "./pages/Loader"
import { darkMode } from "./feature/darkmode";
import "./styles/destination.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeTradeState } from "./feature/trade";
import { changeOverLayState } from "./feature/overLay";
import { changeInfoState } from "./feature/info";
import { changeInfoDataState } from "./feature/infoData";
import InvoiceData from "./components/InvoiceData";
import { asideState } from "./feature/aside";
import { calendar,bell,avatar,downArrow,  bolt,
  category,
  discount,
  important,
  logout,
  moon,
  pack,
  profile,
  rightArrow,
  setting,
  sun,
  trade, } from ".";
import { useEffect, useState } from "react";
import SideList from "./components/SideList"

function App() {
  const overlay = useSelector((state) => state.overLay.value);
  const trade = useSelector((state) => state.tradeLay.value);
  const info = useSelector((state) => state.infoLay.value);
  const infoData= useSelector((state) => state.infoLayData.value);
  const asideLay = useSelector((state) => state.aside.value);

  const dispatch = useDispatch();
  const darkValue = useSelector((state) => state.darkMode.value);
  const disptach = useDispatch()
  const [button,setButton] = useState(false)
  function switchItLight (){
    disptach(darkMode("light"));
  }

  function switchItDark(){
    disptach(darkMode("dark")); 
  }
function removeOverLay(){
  dispatch(changeTradeState(false));
  dispatch(changeInfoState(false));
  dispatch(asideState(false))
  dispatch(changeOverLayState(false));
  dispatch(
    changeInfoDataState({
    })
  )
}
useEffect(()=>{
  localStorage.setItem("theme",`${darkValue}`);
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.remove('bg-light-mode-bg-very-light-gray');
    document.querySelector('html').classList.add('dark', 'bg-dark-mode-bg-very-dark-blue');
} else {
    document.querySelector('html').classList.remove('dark', 'bg-dark-mode-bg-very-dark-blue');
    document.querySelector('html').classList.add('bg-light-mode-bg-very-light-gray');
}

})
  return (
<>
<Loader/>
{
  overlay?<div className={asideLay?"":"over-lay hover:cursor-pointer"}>
<div className={asideLay?"":"overlay-inner"}>
<div className={asideLay?"":"overlay-menu dark:bg-element-dark"}>
{
  info?<div className="info-data dark:bg-element-dark dark:text-gray-400">
  <div className="close-menu w-full flex justify-end">

<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer fill-[#000000]  dark:fill-[#ffffff]'  onClick={()=>{
               removeOverLay();
              }} ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
</div>
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
  <div className="close-menu w-full flex justify-end">

<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer fill-[#000000]  dark:fill-[#ffffff]'  onClick={()=>{
                  removeOverLay();
              }} ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
</div>
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
  {
    asideLay?<div className="overlay-nav-lay">
    <div className="overlay-nav-inner">
      <div  className="overlay-nav-menu dark:bg-element-dark">
<div className="aside">
<div className="close-menu w-full flex justify-between">
<div className="w-[40px] h-[40px]">
<img src={bolt} className="w-[40px] h-[40px]"/>
</div>

<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer fill-[#000000] dark:fill-[#ffffff]'  onClick={()=>{
             removeOverLay()
              }} ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
</div>
    <div className="profile">
    <div className="profile-image"> 
    <img src={avatar}/>
    </div>
    <div className="profile-details">
    <p>Justin Bergson</p>
    <p>Justin@gmail.com</p>
    </div>
 <div>   
 <img src={downArrow}/>
 </div>

    </div>
  <div className="relative input-mobile">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-lg w-full">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 dark:fill-[#ffffff] fill-[#000000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M16.5 10.5a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-5.197 5.197a7.5 7.5 0 1 1 0-10.607 7.5 7.5 0 0 1 0 10.607z" />
            </svg>
        </div>
        <input
          type="search"
          className="bg-white border border-gray-300 text-sm block  w-full p-4 ps-10 sm:w-10/12 rounded-full"
          placeholder="Search"
          required
          autoComplete='off'
        />
       
        </div>
        
        <div className="calendar-details-mobile">
        <img src={calendar}/>
        <p>November 15,2023</p>
        </div>
        <div className="bell-icon-mobile">
     <div className="bell-icon-actual">
     <img src={bell}/>
     </div>
        <p>Notification</p>
        </div>
        <aside className="side-bar-mobile">
      <ul className="top-nav-list-mobile">
        <SideList img={category}/>
        <SideList img={trade} />
        <SideList img={profile} />
        <SideList img={pack} />
        <SideList img={discount} />
        <SideList img={important} />
        <SideList img={rightArrow} />
        <SideList img={setting} />
        <SideList img={logout} />
      </ul>
   

    </aside>
    <button className="mode-mobile relative bg-bg-lightmode mb-4">
<div className= {darkValue==="light"?"bg-[#34CAA5] toggles":""} onClick={switchItLight}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[4.5rem] h-[2.5rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

</div>
  <div onClick={switchItDark} className={darkValue==="dark"?"bg-[#D4D4D4] toggles":""}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[4.5rem] h-[2.5rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

  </div>
        </button>
    
  </div>
      </div>
    </div>

    </div>:""
  }


  
</>
  )
}

export default App
