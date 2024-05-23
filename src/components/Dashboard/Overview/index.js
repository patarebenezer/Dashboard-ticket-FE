// Overview.js
import React, { useEffect, useState } from "react";
import { overviewService } from "../../../services/overview";
import Card from "./Card";
import { LineChart } from "@mui/x-charts";
import SubCard from "./SubCard";
import UnresolvedTickets from "./UnresolvedTickets";
import Tasks from "./Tasks";
import Spinner from "./Spinner";

export default function Overview() {
 const [data, setData] = useState(null);

 const dataOverview = async () => {
  try {
   const response = await overviewService();
   setData(response[0]);
  } catch (error) {
   console.error("Error fetching overview data", error);
  }
 };

 const currentDateTime = new Date();
 const formattedDate = currentDateTime.toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
 });
 const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
  hour: "2-digit",
  minute: "2-digit",
 });

 useEffect(() => {
  dataOverview();
 }, []);

 if (!data) {
  return (
   <div className='flex justify-center items-center min-h-screen -mt-10'>
    <Spinner />
   </div>
  );
 }

 return (
  <>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between mx-6 my-10'>
    <Card title={"Unresolved"} totalCount={data.unresolved} />
    <Card title={"Overdue"} totalCount={data.overdue} />
    <Card title={"Open"} totalCount={data.openTicket} />
    <Card title={"On hold"} totalCount={data.onHold} />
   </div>
   <div className='bg-white grid grid-cols-1 lg:grid-cols-2 mx-6 rounded-md'>
    <div className='w-full'>
     <div className='p-4'>
      <p className='font-bold text-lg antialiased'>Today's trends</p>
      <span className='font-semibold antialiased text-gray-400 text-sm'>
       as of {formattedDate} {formattedTime}
      </span>
     </div>
     <LineChart
      series={[
       {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
       },
      ]}
      height={400}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ horizontal: true }}
     />
    </div>
    <div className='flex flex-col w-full py-2 items-center'>
     <SubCard title={"Resolved"} totalCount={data.resolved} />
     <SubCard title={"Received"} totalCount={data.received} />
     <SubCard
      title={"Average first response time"}
      totalCount={"33m"}
      type={true}
     />
     <SubCard title={"Average response time"} totalCount={"3h 8m"} />
     <SubCard title={"Resolution within SLA"} totalCount={"94%"} />
    </div>
   </div>
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6 my-10'>
    <UnresolvedTickets />
    <Tasks />
   </div>
  </>
 );
}
