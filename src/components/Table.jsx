import "../styles/destination.css";
import userOne from "../resources/images/userone.png";
import userTwo from "../resources/images/userthree.png";
import userThree from "../resources/images/userfour.png";
import userFour from "../resources/images/userfive.png";
import userFive from "../resources/images/usersix.png"
import {view} from ".."
import TableRow from "./TableRow";
const customers =[
  {
      "img":userOne,
      "name": "Marcus Bergson",
      "date": "Nov 15, 2023",
      "amount":"$80.000",
      "status":"Paid"

  },
  {
      "img":userTwo,
      "name": "Jaydon Vaccaro",
      "date": "Nov 15, 2023",
      "amount":"$150,000",
      "status":"Refund"

  },
  {
      "img":userThree,
      "name": "Corey Schleifer",
      "date": "Nov 14, 2023",
      "amount":"$87,000",
      "status":"Paid"

  },
  {
      "img": userFour,
      "name": "Cooper Press",
      "date": "Nov 14, 2023",
      "amount":"$100,000",
      "status":"Refund"

  },
  {
      "img":userFive,
      "name": "Phillip Lubin",
      "date": "Nov 14, 2023",
      "amount":"$78,000",
      "status":"Paid"

  }
  
]

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
                    <tr className="bg-white border-b dark:bg-element-dark dark:border-gray-700">
                    <TableRow
                        img={item.img}
                        name={item.name}
                        date={item.date}
                        amount={item.amount}
                        status={item.status}
                        key={index}


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
