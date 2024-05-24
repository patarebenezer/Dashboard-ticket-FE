import { BsMoon, BsSunFill } from "react-icons/bs";

export default function DarkModeToggle({ toggleDarkMode, darkMode }) {
 return (
  <div className='absolute top-6 lg:top-4 right-5 lg:right-48 p-4'>
   <button
    onClick={toggleDarkMode}
    className='text-gray-800 dark:text-gray-200 focus:outline-none'
   >
    {darkMode ? (
     <BsMoon size={24} />
    ) : (
     <BsSunFill size={24} className='text-white lg:text-yellow-500' />
    )}
   </button>
  </div>
 );
}
