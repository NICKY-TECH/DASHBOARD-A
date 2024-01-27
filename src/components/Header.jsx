import "../styles/destination.css";
import { calendar,bell,avatar,downArrow } from "../index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asideState } from "../feature/aside";
import { changeTradeState } from "../feature/trade";
import { changeOverLayState } from "../feature/overLay";
import { changeInfoState } from "../feature/info";
import { changeInfoDataState } from "../feature/infoData";


function Header (){
  const asideLay = useSelector((state) => state. aside.value);
  const dispatch = useDispatch();

return <header className="main-header">
    <h2 className="header-title">Dashboard</h2>
    <div className="header-second-half">
        
    <div className="relative input-field">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-lg ">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 fill-[#000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
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
        <div className="calendar-details">
        <img src={calendar}/>
        <p>November 15,2023</p>
        </div>
        <div className="bell-icon">
        <img src={bell}/>
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
    </div>
  <div onClick={()=>{
    console.log("menu clicked")
   dispatch(asideState(true));
   dispatch(changeTradeState(false));
  dispatch(changeInfoState(false));
  dispatch(changeOverLayState(true));
  dispatch(
    changeInfoDataState({
    })
  )
  }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ham hover:cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"  />
</svg>
  </div>

    

</header>
}

export default Header