import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Overview from "./Overview";

const Dashboard = () => {
 const navigate = useNavigate();
 const { isAuthenticated, user } = useAuth();
 const isAdmin = isAuthenticated && user?.roles === "admin";
 const token = localStorage.getItem("token");

 useEffect(() => {
  if (!token && !isAuthenticated) {
   navigate("/login");
  }
 }, [isAuthenticated, navigate, token]);

 return (
  <div>
   {isAdmin ? (
    <div className='flex flex-col md:flex-row bg-[#e3e5f0] min-h-screen'>
     <Sidebar />
     <div className='flex-1'>
      <Header />
      <Overview />
     </div>
    </div>
   ) : (
    <p>Welcome Guest! You can only create tickets.</p>
   )}
  </div>
 );
};

export default Dashboard;
