import React, { useEffect, useState } from "react";
import {
 BsThreeDotsVertical,
 BsSortUp,
 BsChevronLeft,
 BsChevronRight,
} from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { ticketService } from "../../../services/ticket";
import Spinner from "../Overview/Spinner";

const getPriorityClass = (priority) => {
 switch (priority) {
  case "beauty":
   return "bg-red-500 text-white";
  case "fragrances":
   return "bg-yellow-500 text-white";
  case "groceries":
   return "bg-green-500 text-white";
  default:
   return "bg-gray-200";
 }
};

const TicketList = () => {
 const [tickets, setTickets] = useState(null);
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(8);
 const [sortKey, setSortKey] = useState("title");
 const [filterKey, setFilterKey] = useState("all");

 const dataTickets = async () => {
  try {
   const response = await ticketService();
   setTickets(response.products);
  } catch (error) {
   console.error("Error fetching overview data", error);
  }
 };

 useEffect(() => {
  dataTickets();
 }, []);

 if (!tickets) {
  return (
   <div className='flex justify-center items-center min-h-screen -mt-10'>
    <Spinner />
   </div>
  );
 }

 const sortedTickets = [...tickets].sort((a, b) => {
  if (sortKey === "title") {
   return a.title.localeCompare(b.title);
  } else if (sortKey === "priority") {
   return a.category.localeCompare(b.category);
  } else if (sortKey === "date") {
   return new Date(a.meta.updatedAt) - new Date(b.meta.updatedAt);
  }
  return 0;
 });

 const filteredTickets = sortedTickets.filter((ticket) => {
  if (filterKey === "all") {
   return true;
  } else {
   return ticket.category === filterKey;
  }
 });

 const handleItemsPerPageChange = (event) => {
  setItemsPerPage(Number(event.target.value));
  setCurrentPage(1);
 };

 const handleSortChange = (event) => {
  setSortKey(event.target.value);
 };

 const handleFilterChange = (event) => {
  setFilterKey(event.target.value);
 };

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentTickets = filteredTickets.slice(
  indexOfFirstItem,
  indexOfLastItem
 );

 const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

 const handleNextPage = () => {
  if (currentPage < totalPages) {
   setCurrentPage(currentPage + 1);
  }
 };

 const handlePreviousPage = () => {
  if (currentPage > 1) {
   setCurrentPage(currentPage - 1);
  }
 };

 const formatDateCustomer = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
 };

 const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
 };

 return (
  <div className='max-w-7xl mx-6 my-10 bg-white p-8 rounded-lg shadow-md'>
   <div className='flex justify-between items-center mb-4'>
    <h1 className='text-2xl font-semibold'>All tickets</h1>
    <div className='flex space-x-4'>
     <div className='flex items-center space-x-2'>
      <BsSortUp className='text-gray-600' />
      <select
       value={sortKey}
       onChange={handleSortChange}
       className='text-gray-600 bg-transparent focus:outline-none'
      >
       <option value='title' disabled>
        Sort
       </option>
       <option value='title'>Sort by Title</option>
       <option value='priority'>Sort by Priority</option>
       <option value='date'>Sort by Date</option>
      </select>
     </div>
     <div className='flex items-center space-x-2'>
      <FaFilter className='text-gray-600' />
      <select
       value={filterKey}
       onChange={handleFilterChange}
       className='text-gray-600 bg-transparent focus:outline-none'
      >
       <option value='all' disabled>
        Filter
       </option>
       <option value='all'>All Categories</option>
       <option value='beauty'>High</option>
       <option value='fragrances'>Normal</option>
       <option value='groceries'>Low</option>
      </select>
     </div>
    </div>
   </div>
   <div className='overflow-x-auto'>
    <table className='min-w-full bg-white'>
     <thead>
      <tr className='text-left text-gray-400 antialiased'>
       <th className='py-2 px-4 border-b border-gray-200'>Ticket details</th>
       <th className='py-2 px-4 border-b border-gray-200'>Customer name</th>
       <th className='py-2 px-4 border-b border-gray-200'>Date</th>
       <th className='py-2 px-4 border-b border-gray-200'>Priority</th>
      </tr>
     </thead>
     <tbody>
      {currentTickets.map((ticket, index) => (
       <tr key={index} className='hover:bg-gray-100'>
        <td className='py-4 px-6 border-b border-gray-200 flex items-center'>
         <img
          src={ticket?.images[0]}
          alt={ticket?.title}
          className='h-10 w-10 rounded-full mr-4 bg-gray-200'
         />
         <div>
          <p className='font-semibold'>{ticket?.title}</p>
          <p className='text-sm text-gray-300'>
           Updated {ticket?.weight} day ago
          </p>
         </div>
        </td>
        <td className='py-4 px-6 border-b border-gray-200'>
         <p className='font-semibold'>{ticket?.brand ?? ticket?.title}</p>
         <p className='text-sm text-gray-400'>
          on {formatDateCustomer(ticket?.meta?.updatedAt)}
         </p>
        </td>
        <td className='py-4 px-6 border-b border-gray-200'>
         <p className='font-semibold'>{formatDate(ticket?.meta?.updatedAt)}</p>
         <p className='text-sm text-gray-400'>{ticket?.weight}:00 PM</p>
        </td>
        <td className='py-4 px-6 border-b border-gray-200'>
         <span
          className={`px-3 py-1 rounded-full text-sm capitalize font-semibold ${getPriorityClass(
           ticket.category
          )}`}
         >
          {ticket.category === "beauty"
           ? "High"
           : ticket.category === "groceries"
           ? "Normal"
           : ticket.category === "fragrances"
           ? "Low"
           : "Not urgent"}
         </span>
        </td>
        <td className='py-4 px-6 border-b border-gray-200 text-right'>
         <span className='text-right hover:cursor-pointer'>
          <BsThreeDotsVertical className='text-gray-400' />
         </span>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
   <div className='flex flex-col md:flex-row justify-end gap-4 md:gap-16 mr-0 md:mr-7 items-center mt-4'>
    <div className='flex items-center space-x-2 text-gray-600'>
     <span className='text-gray-400 font-semibold antialiased'>
      Rows per page:
     </span>
     <select
      value={itemsPerPage}
      onChange={handleItemsPerPageChange}
      className='text-gray-600 bg-transparent focus:outline-none'
     >
      <option value={8}>8</option>
      <option value={16}>16</option>
      <option value={32}>32</option>
      <option value={tickets.length}>All</option>
     </select>
    </div>
    <div className='text-gray-400 antialiased'>
     {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredTickets.length)}{" "}
     of {filteredTickets.length}
    </div>
    <div className='flex items-center space-x-2 text-gray-600'>
     <button
      onClick={handlePreviousPage}
      className='disabled:opacity-50'
      disabled={currentPage === 1}
     >
      <BsChevronLeft className='text-xl' />
     </button>
     <button
      onClick={handleNextPage}
      className='disabled:opacity-50'
      disabled={currentPage === totalPages}
     >
      <BsChevronRight className='text-xl' />
     </button>
    </div>
   </div>
  </div>
 );
};

export default TicketList;
