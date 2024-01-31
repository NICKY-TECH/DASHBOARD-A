import "../styles/destination.css"
function SideList({ img,mobile,is,mobileScreen}) {
  return (
    <li className={mobile==="yes"&&mobileScreen==="true"? "dark:bg-[#f5fefd] rounded-full p-2" :is==="yes"?"category":""}>
      <img src={img} />
    </li>
  );
}

export default SideList;
