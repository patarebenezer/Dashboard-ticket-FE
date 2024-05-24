import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UnresolvedTickets = () => {
 const { t } = useTranslation();
 const tickets = [
  { status: t("Waiting on Feature Request"), count: 4238 },
  { status: t("Awaiting Customer Response"), count: 1005 },
  { status: t("Awaiting Developer Fix"), count: 914 },
  { status: t("Pending"), count: 281 },
 ];

 return (
  <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md w-full'>
   <div className='flex justify-between items-center mb-4 pt-4'>
    <h2 className='text-xl font-semibold px-4'>{t("Unresolved tickets")}</h2>
    <Link href='#' className='text-blue-500 px-4'>
     View details
    </Link>
   </div>
   <p className='text-sm mb-4 -mt-2 font-bold text-gray-500 antialiased px-4'>
    <span className='text-gray-300'>Group:</span> Support
   </p>
   <div className='pb-4'>
    {tickets.map((ticket, index) => (
     <div
      key={index}
      className={`flex justify-between py-2 ${
       index !== tickets.length - 1 ? "border-b" : ""
      }`}
     >
      <span className='px-4 pb-2 font-semibold antialiased'>
       {ticket.status}
      </span>
      <span className='font-semibold px-4 pb-2 text-gray-400'>
       {ticket.count}
      </span>
     </div>
    ))}
   </div>
  </div>
 );
};

export default UnresolvedTickets;
