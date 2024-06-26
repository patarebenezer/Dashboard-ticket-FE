import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { BsBellFill } from "react-icons/bs";
import { useAuth } from "../../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

const Header = () => {
 const { t } = useTranslation();
 const { user, logout } = useAuth();
 const navigate = useNavigate();
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const pathname = window.location.pathname.replace(/\//g, "");

 const handleLogout = () => {
  logout();
  setDropdownOpen(false);
  navigate("/login");
 };

 return (
  <div className='flex flex-col md:flex-row justify-between items-center p-6'>
   <div>
    <h1 className='text-2xl font-semibold capitalize'>{t(pathname)}</h1>
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
      {user?.roles}
     </span>
     <img
      src={user?.avatar}
      alt='avatar'
      className='w-10 h-10 border-white border-[0.2rem] rounded-full cursor-pointer'
      onClick={() => setDropdownOpen(!dropdownOpen)}
     />

     {dropdownOpen && (
      <div className='absolute right-0 mt-24 w-fit mr-10 bg-gray-700 transition duration-300 ease-in-out transform hover:bg-gray-600 rounded-md shadow-lg z-10'>
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
