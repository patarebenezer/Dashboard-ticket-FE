import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Overview = () => {
 const data = [
  { x: 1, y: 10 },
  { x: 2, y: 15 },
  { x: 3, y: 20 },
  { x: 4, y: 25 },
  { x: 5, y: 30 },
 ];

 return (
  <div className='p-4 bg-gray-100 min-h-screen'>
   <div className='grid grid-cols-4 gap-4 mb-6'>
    <div className='p-4 bg-white rounded shadow text-center'>
     <h2 className='text-xl font-bold'>Unresolved</h2>
     <p className='text-2xl'>60</p>
    </div>
    <div className='p-4 bg-white rounded shadow text-center'>
     <h2 className='text-xl font-bold'>Overdue</h2>
     <p className='text-2xl'>16</p>
    </div>
    <div className='p-4 bg-white rounded shadow text-center'>
     <h2 className='text-xl font-bold'>Open</h2>
     <p className='text-2xl'>43</p>
    </div>
    <div className='p-4 bg-white rounded shadow text-center'>
     <h2 className='text-xl font-bold'>On hold</h2>
     <p className='text-2xl'>64</p>
    </div>
   </div>
   <div className='bg-white p-4 rounded shadow mb-6'>
    <h2 className='text-xl font-bold mb-4'>Today's trends</h2>
    <LineChart
     xAxis={[{ type: "number", position: "bottom" }]}
     yAxis={[{ type: "number", position: "left" }]}
     series={[{ data, label: "Today" }]}
     width={600}
     height={300}
    />
   </div>
   <div className='grid grid-cols-2 gap-4'>
    <div className='bg-white p-4 rounded shadow'>
     <h2 className='text-xl font-bold mb-4'>Unresolved tickets</h2>
     <ul>
      <li className='mb-2'>Waiting on Feature Request: 4238</li>
      <li className='mb-2'>Awaiting Customer Response: 1005</li>
      <li className='mb-2'>Awaiting Developer Fix: 914</li>
      <li className='mb-2'>Pending: 281</li>
     </ul>
    </div>
    <div className='bg-white p-4 rounded shadow'>
     <h2 className='text-xl font-bold mb-4'>Tasks</h2>
     <ul>
      <li className='mb-2'>Finish ticket update: Urgent</li>
      <li className='mb-2'>Create new ticket example: New</li>
      <li className='mb-2'>Update ticket report: Default</li>
     </ul>
    </div>
   </div>
  </div>
 );
};

export default Overview;
