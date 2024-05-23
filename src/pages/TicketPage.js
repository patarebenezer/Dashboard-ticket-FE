import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import TicketList from "../components/Dashboard/Tickets";

export default function TicketPage() {
 return (
  <div className='flex flex-col md:flex-row bg-[#e3e5f0] min-h-screen'>
   <Sidebar />
   <div className='flex-1'>
    <Header />
    <TicketList />
   </div>
  </div>
 );
}
