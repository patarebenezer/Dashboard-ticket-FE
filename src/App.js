import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TicketPage from "./pages/TicketPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
 return (
  <AuthProvider>
   <Router>
    <Routes>
     <Route path='/' element={<LoginPage />} />
     <Route path='/login' element={<LoginPage />} />
     <Route path='/dashboard' element={<DashboardPage />} />
     <Route path='/ticket' element={<TicketPage />} />
     <Route path='*' element={<NotFoundPage />} />
    </Routes>
   </Router>
  </AuthProvider>
 );
}

export default App;
