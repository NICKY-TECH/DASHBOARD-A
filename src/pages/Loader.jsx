import "../styles/destination.css";
import { useEffect, useState } from "react";
import { Bars } from 'react-loader-spinner';
import Dashboard from "./Dashboard";
import { darkMode } from "../feature/darkmode";
import { useDispatch,useSelector } from "react-redux";

function Loader() {
  const darkValue = useSelector((state) => state.darkMode.value);
  const disptach = useDispatch()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{setTimeout(()=>{
setLoading(false)
  },6000)})
  return (
loading?    <section className="max-[639px]:min-h-screen  sm:min-h-screen lg:h-screen flex flex-col space-y-10 justify-center items-center min-w-max font-bold font-Lato text-4xl">
<h1>Analytics Dashboard</h1>

<Bars
height="80"
width="80"
color="#4fa94d"
ariaLabel="bars-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
</section>:<Dashboard/>
  )
}

export default Loader;
