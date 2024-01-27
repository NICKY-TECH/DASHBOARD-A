import "../styles/destination.css";
import { customers } from "..";
import {view} from ".."
import TableRow from "./TableRow";

function Table() {
  return (
    <div className="relative overflow-x-auto h-full rounded-lg">
      <table className="rounded-lg w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:bg-element-dark ">
        <thead className="text-xs border-b text-gray-700 uppercase dark:bg-element-dark dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-6 py-3">
          Name
            </th>
            <th scope="col" className="px-6 py-3">
            Date
            </th>
            <th scope="col" className="px-6 py-3">
            Amount
            </th>
            <th scope="col" className="px-6 py-3">
            Status
            </th>
            <th scope="col" className="px-6 py-3">
           Invoice
            </th>
          </tr>
        </thead>
        <tbody>
        
            {
                customers.map((item,index)=>{
                
                    return <>
                    <tr className="bg-white border-b dark:bg-element-dark dark:border-gray-700"    key={index}>
                    <TableRow
                        img={item.img}
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        status={item.status}


                    />
                        </tr>
                    </>
                })
            }
           
        
            
      
          
          
        </tbody>
      </table>
    </div>
  );
}

export default Table;
