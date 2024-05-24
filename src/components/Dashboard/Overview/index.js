import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";
import { overviewService } from "../../../services/overview";
import Card from "./Card";
import Tasks from "./Tasks";
import SubCard from "./SubCard";
import Spinner from "./Spinner";
import UnresolvedTickets from "./UnresolvedTickets";
import { useTranslation } from "react-i18next";

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

 const { t } = useTranslation();
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
    <Card title={t("unresolved")} totalCount={data.unresolved} />
    <Card title={t("overdue")} totalCount={data.overdue} />
    <Card title={t("open")} totalCount={data.openTicket} />
    <Card title={t("onhold")} totalCount={data.onHold} />
   </div>
   <div className='bg-white dark:bg-gray-700 dark:text-white grid grid-cols-1 lg:grid-cols-2 mx-6 rounded-md'>
    <div className='w-full'>
     <div className='p-4'>
      <p className='font-bold text-lg antialiased'>{t("Today's trends")}</p>
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
     <SubCard title={t("resolved")} totalCount={data.resolved} />
     <SubCard title={t("received")} totalCount={data.received} />
     <SubCard title={t("averagefirst")} totalCount={"33m"} type={true} />
     <SubCard title={t("averagefirstresponse")} totalCount={"3h 8m"} />
     <SubCard title={t("resolution")} totalCount={"94%"} />
    </div>
   </div>
   <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6 my-10'>
    <UnresolvedTickets />
    <Tasks />
   </div>
  </>
 );
}
