import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TicketPage from "./pages/TicketPage";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Routes>
     <Route path='/login' element={<LoginPage />} />
     <Route path='/dashboard' element={<DashboardPage />} />
     <Route path='/ticket' element={<TicketPage />} />
    </Routes>
   </Router>
  </AuthProvider>
 );
}

export default App;
