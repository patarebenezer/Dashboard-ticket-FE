import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Dashboard = () => {
 const navigate = useNavigate();
 const { isAuthenticated, user } = useAuth();
 const isAdmin = isAuthenticated && user?.roles === "admin";
 const token = localStorage.getItem("token");

 useEffect(() => {
  if (!token && !isAuthenticated) {
   console.log("User not authenticated, redirecting to login");
   navigate("/login");
  }
 }, [isAuthenticated, navigate, token]);

 return (
  <div>
   {isAdmin ? (
    <>
     <div className='flex bg-[#d9ddef]'>
      <Sidebar />
      <div className='flex-1'>
       <Header />
       {/* <Overview /> */}
      </div>
     </div>
    </>
   ) : (
    <p>Welcome Guest! You can only create tickets.</p>
   )}
  </div>
 );
};

export default Dashboard;
