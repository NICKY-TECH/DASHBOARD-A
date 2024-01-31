import "../styles/destination.css"
function SideList({ img,mobile,is,mobileScreen}) {
  return (
    <>
     {
      mobile==="yes" ?<li className={mobile==="yes"? "dark:bg-[#f5fefd] rounded-full p-2" :""}>
      <img src={img} /></li>:  <li className={is==="yes"?"category":""}>
      <img src={img} />
    </li>
    }
    </>
   
  );
}

export default SideList;
