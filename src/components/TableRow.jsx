import "../styles/destination.css";
import { view } from "..";
import { useDispatch } from "react-redux";
import { changeTradeState } from "../feature/trade";
import { changeOverLayState } from "../feature/overLay";
import { changeInfoState } from "../feature/info";
import { changeInfoDataState } from "../feature/infoData";
import { asideState } from "../feature/aside";

function TableRow({ date, amount, status, name, img }) {
  const dispatch = useDispatch();
  function viewReceipt(date, amount, status, name, img) {
    dispatch(changeTradeState(false));
    dispatch(changeInfoState(true));
    dispatch(changeOverLayState(true));
    dispatch(asideState(false))
    dispatch(
      changeInfoDataState({
        image: img,
        date: date,
        amount: amount,
        status: status,
        name: name,
      })
    );
  }

  return (
    <>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white gap-2 text-r"
      >
        <td className=" mr-5">
        <img className="rounded-full w-[60px] h-auto" src={img} alt="image description"/>
        </td>
        <td>{name}</td>
      </th>
      <td className="px-6 py-4 text-neutral">{date}</td>
      <td className="px-6 py-4">{amount}</td>
      <td
        className={
          status === "Refund"
            ? "px-6 py-4 text-red-600"
            : "px-6 py-4 text-green-600"
        }
      >
        {status}
      </td>
      <td
        className="px-6 py-4 hover:cursor-pointer dark:text-gray-400"
        onClick={() => {
          viewReceipt(date, amount, status, name, img);
        }}
      >
<div className="flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[1rem] h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
<p className="text-[0.8rem]">View</p>
</div>
      </td>
    </>
  );
}

export default TableRow;
