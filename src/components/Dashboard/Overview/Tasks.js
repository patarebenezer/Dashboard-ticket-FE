import { useTranslation } from "react-i18next";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Tasks = () => {
 const { t } = useTranslation();
 const tasks = [
  { name: t("Finish ticket update"), status: "URGENT", color: "bg-yellow-500" },
  {
   name: t("Create new ticket example"),
   status: "NEW",
   color: "bg-green-500",
  },
  {
   name: t("Update ticket report"),
   status: "DEFAULT",
   color: "bg-gray-200 !text-gray-400",
  },
 ];

 return (
  <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md w-full'>
   <div className='flex justify-between items-center mb-4'>
    <h2 className='text-xl font-semibold px-4 pt-4'>Tasks</h2>
    <Link href='#' className='text-blue-500 px-4'>
     View all
    </Link>
   </div>
   <p className='text-sm mb-4 -mt-2 font-bold text-gray-300 antialiased px-4'>
    Today
   </p>
   <div>
    <div className={`flex justify-between py-2 border-b`}>
     <span className='px-4 pb-2 font-semibold antialiased text-gray-300'>
      {t("Create new task")}
     </span>
     <span
      className={`font-semibold px-1 py-1 rounded-lg bg-gray-300 mr-4 hover:cursor-pointer`}
     >
      <BiPlus className='text-2xl text-gray-500' />
     </span>
    </div>
    {tasks.map((task, index) => (
     <div
      key={index}
      className={`flex justify-between py-2 ${
       index !== task.length - 1 ? "border-b" : ""
      }`}
     >
      <span className='px-4 font-semibold antialiased flex items-center gap-4'>
       <input
        type='checkbox'
        className='rounded-full h-5 w-5 border-gray-300 focus:ring-2 focus:ring-blue-500'
       />
       {task.name}
      </span>
      <span
       className={`font-semibold px-4 py-1 text-sm text-white rounded-lg ${task.color} mr-4`}
      >
       {task.status}
      </span>
     </div>
    ))}
   </div>
  </div>
 );
};

export default Tasks;
