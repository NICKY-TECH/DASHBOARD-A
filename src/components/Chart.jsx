import { useState } from "react";
import "../styles/destination.css";
import { useSelector } from "react-redux";
import {
    BarChart,
    Bar,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { downArrow } from "..";
const salesData = [
    { name: "Jan", amount: 7000 },
    { name: "Feb", amount: 19500 },
    { name: "Mar", amount: 3350},
    { name: "Apr", amount: 29800 },
    { name: "May", amount: 9500 },
    { name: "Jun", amount: 45000 },
    { name: "Jul", amount: 9900 },
    { name: "Aug", amount: 29900 },
    { name: "Sep", amount: 30300 },
    { name: "Oct", amount: 4950},
    { name: "Nov", amount: 30000 },
    { name: "Dec", amount: 22000 },
];

const yAxisTicks = [0, 5000, 10000, 20000, 30000, 40000, 50000];

function Chart (){
    // const yTicks = [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];
        const yTicks =[0, 5000, 10000, 20000, 30000, 40000, 50000];
return <section className="chart">
<article>
    <h3>Sales Trend</h3>
    <div className="sorted-by">
        <p>Sorted by:</p>
        <div className="sorted-icon">
 <div className="sorted"> 
 <p> Weekly </p>
<div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</div>
 </div>

    </div>
    </div>
</article>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart 
 style={{ cursor: 'pointer' }} 
     height={300}
     width={500}
    data={salesData}
     margin={{
        right:30,
        bottom: 20,
    }}>
 <CartesianGrid horizontal={true} vertical={false} strokeDasharray="2 2" />
    <XAxis dataKey="name" scale="point" padding={{ left: 40, right: 30 }} axisLine={false}     />
    <YAxis 
tickCount={yTicks.length} ticks={yTicks} axisLine={false}
    
   />
   
    <Tooltip content={CustomToolTip}/>
    <Bar dataKey="amount" fill="#34CAA5" 
          radius={[40, 40, 0, 0]}
    />
    
</BarChart>
</ResponsiveContainer>
</section>
}
const CustomToolTip  =({active, payload, label})=>{
    if(active && payload &&payload.length){
        const month = payload[0].payload.name; // Extract month from payload
        const amount = payload[0].value;
        return <div style={{ backgroundColor: '#354152' }} className="custom-tooltip w-auto p-4 flex flex-col gap-4 rounded-lg">
        <p className="text-medium text-lg">
        {label}</p>
        <p className="font-lato text-white">Month:
        <span className="ml-2">{month}</span>
        </p>
        <p className="text-sm text-white">Amount:
        <span className="ml-2">
            ${amount}
        </span></p>


        </div>
    //     return <div className="comment-container">
    //     <div
    //       style={{ backgroundColor: '#000' }}
    //       className="custom-tooltip w-auto p-4 flex flex-col gap-4 rounded-lg"
    //     >
    //     <p className="font-lato text-white">Month:
    //     <span className="ml-2">{month}</span>
    //     </p>
    //     <p className="text-sm text-white">Amount:
    //     <span className="ml-2">
    //     ${amount}
    //  </span></p>
    //     </div>
    //   </div>
    }
    return null
}

export default Chart