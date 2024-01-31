import "../styles/destination.css"
function SideList({ img,mobile }) {
  return (
    <li className={mobile==="yes"? "dark:bg-[#f5fefd] rounded-full p-2 " :""}>
      <img src={img} />
    </li>
  );
}

export default SideList;
