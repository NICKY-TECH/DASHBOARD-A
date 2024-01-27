import "../styles/destination.css"

function InvoiceData({title,value}){
 return   <div className="title-container">
 <p className="title">{title}</p>
   <p className={value==="Refund" && title ==="Status"?"value text-red-500":value==="Paid" && title=="Status"?"value text-green-500":"font-normal"}>{value}</p>
 </div>
}

export default InvoiceData