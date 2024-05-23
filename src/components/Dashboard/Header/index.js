import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "../../../contexts/AuthContext";

const Header = () => {
 const { user, logout } = useAuth();
 const [dropdownOpen, setDropdownOpen] = useState(false);

 const handleLogout = () => {
  logout();
  setDropdownOpen(false);
 };

 return (
  <div className='flex justify-between items-center p-6'>
   <div>
    <h1 className='text-2xl font-semibold'>Overview</h1>
   </div>
   <div className='flex items-center'>
    <div className='flex'>
     <div className='mr-4'>
      <BiSearch className='text-gray-400' />
     </div>
     <div className='mr-4'>
      <BsBellFill className='text-gray-400' />
     </div>
    </div>
    <div className='flex items-center'>
     <span className='mr-2 font-semibold antialiased capitalize'>
      {user.roles}
     </span>
     <img
      src={user.avatar}
      alt='avatar'
      className='w-10 h-10 border-white border-[0.2rem] rounded-full cursor-pointer'
      onClick={() => setDropdownOpen(!dropdownOpen)}
     />

     {dropdownOpen && (
      <div className='absolute right-0 mt-24 w-fit mr-10 bg-gray-700 transition duration-300 ease-in-out transform  hover:bg-gray-600 rounded-md shadow-lg z-10'>
       <ul>
        <li>
         <button
          onClick={handleLogout}
          className='w-full text-left px-4 py-2 text-gray-800'
         >
          <div className='flex gap-4 items-center justify-between text-white font-semibold'>
           <span>Logout</span>
           <LuLogOut />
          </div>
         </button>
        </li>
       </ul>
      </div>
     )}
    </div>
   </div>
  </div>
 );
};

export default Header;
