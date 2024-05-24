import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Overview from "./Overview";
import TicketList from "./Tickets";

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

 return <>{isAdmin ? <Overview /> : <TicketList />}</>;
};

export default Dashboard;
