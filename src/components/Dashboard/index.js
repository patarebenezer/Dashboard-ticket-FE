import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Overview from "./Overview";
import TicketPage from "../../pages/TicketPage";
import { BsSun, BsMoon } from "react-icons/bs";

const Dashboard = () => {
 const navigate = useNavigate();
 const { isAuthenticated, user } = useAuth();
 const isAdmin = isAuthenticated && user?.roles === "admin";
 const token = localStorage.getItem("token");
 const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
  if (!token && !isAuthenticated) {
   navigate("/login");
  }
 }, [isAuthenticated, navigate, token]);

 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };

 return (
  <div className={darkMode ? "dark" : ""}>
   <div className='absolute top-4 right-48 p-4'>
    <button
     onClick={toggleDarkMode}
     className='text-gray-800 dark:text-gray-200 focus:outline-none'
    >
     {!darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
   </div>
   {isAdmin ? (
    <div className='flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen'>
     <Sidebar />
     <div className='flex-1'>
      <Header />
      <Overview />
     </div>
    </div>
   ) : (
    <TicketPage />
   )}
  </div>
 );
};

export default Dashboard;
