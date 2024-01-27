import "../styles/destination.css"
function SideList({ img,is }) {
  return (
    <li className={is==="yes"? "category" :""}>
      <img src={img} />
    </li>
  );
}

export default SideList;
