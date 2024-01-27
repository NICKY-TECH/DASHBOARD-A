import {
  bolt,
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
  trade,
} from "../index";
import "../styles/destination.css";
import SideList from "./SideList";
import { motion } from "framer-motion";
import { darkMode } from "../feature/darkmode";
import { useDispatch,useSelector } from "react-redux";
import Img from "./Img";
import { useEffect, useState } from "react";

function SideBar() {
  const darkValue = useSelector((state) => state.darkMode.value);
  const disptach = useDispatch()
  const [button,setButton] = useState(false)
  function switchItLight (){
    disptach(darkMode("light"));
  }

  function switchItDark(){
    disptach(darkMode("dark")); 
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
    <aside className="sider-bar">
      <ul className="top-nav-list">
        <SideList img={bolt} is="no"/>
        <SideList img={category} is="yes"/>
        <SideList img={trade} is="yes" />
        <SideList img={profile} is="yes" />
        <SideList img={pack} is="yes"/>
        <SideList img={discount} is="yes"/>
        <SideList img={important} is="yes"/>
        <button className="mode relative bg-white">
<div className= {darkValue==="light"?"bg-[#34CAA5] p-1 toggle":""} onClick={switchItLight}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

</div>
  <div onClick={switchItDark} className={darkValue==="dark"?"bg-[#D4D4D4] p-1 toggle":""}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

  </div>
        </button>
      </ul>
      <ul className="bottom-nav-list">
        <SideList img={rightArrow} />
        <SideList img={setting} />
        <SideList img={logout} />
      </ul>
    </aside>
  );
}

export default SideBar;
