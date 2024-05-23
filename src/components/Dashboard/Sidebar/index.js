import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

const Sidebar = () => {
 const [selectedMenu, setSelectedMenu] = useState("Overview");
 const clicked = "bg-gray-700 text-gray-400 border-l-2 border-white";

 const handleMenuClick = (menu) => {
  setSelectedMenu(menu);
 };

 return (
  <div className='h-screen w-1/6 bg-gray-800 text-white'>
   <div className='flex gap-3 items-center justify-center py-10'>
    <div className='flex justify-center'>
     <div className='bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center text-white text-2xl'>
      D
     </div>
    </div>
    <h2 className='text-center text-2xl font-bold antialiased text-gray-500'>
     Dashboard Kit
    </h2>
   </div>
   <nav className='mt-4 text-gray-500 font-semibold antialiased'>
    {menuItems.map((item, index) => (
     <div key={index}>
      {item.name === "Settings" && (
       <p className='bg-gray-700 w-full h-[1px] my-6'></p>
      )}
      <Link
       to={item.path}
       className={`block py-4 px-8 hover:bg-gray-700 ${
        selectedMenu === item.name ? clicked : ""
       }`}
       onClick={() => handleMenuClick(item.name)}
      >
       <div className='flex gap-6 items-center'>
        {item.icon}
        <span>{item.name}</span>
       </div>
      </Link>
     </div>
    ))}
   </nav>
  </div>
 );
};

export default Sidebar;
