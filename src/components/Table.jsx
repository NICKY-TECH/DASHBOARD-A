import "../styles/destination.css";
import {view} from ".."
import TableRow from "./TableRow";
const customers =[
  {
      "img":"../src/resources/images/userone.png",
      "name": "Marcus Bergson",
      "date": "Nov 15, 2023",
      "amount":"$80.000",
      "status":"Paid"

  },
  {
      "img":"../src/resources/images/userthree.png",
      "name": "Jaydon Vaccaro",
      "date": "Nov 15, 2023",
      "amount":"$150,000",
      "status":"Refund"

  },
  {
      "img":"../src/resources/images/userfour.png",
      "name": "Corey Schleifer",
      "date": "Nov 14, 2023",
      "amount":"$87,000",
      "status":"Paid"

  },
  {
      "img": "../src/resources/images/userfive.png",
      "name": "Cooper Press",
      "date": "Nov 14, 2023",
      "amount":"$100,000",
      "status":"Refund"

  },
  {
      "img":"../src/resources/images/usersix.png",
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
