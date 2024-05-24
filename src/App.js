import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TicketPage from "./pages/TicketPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import DarkModeToggle from "./components/DarkMode";
import Sidebar from "./components/Dashboard/Sidebar";
import Header from "./components/Dashboard/Header";

function App() {
 const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };

 const PageWrapper = ({ children }) => (
  <div className={darkMode ? "dark" : ""}>
   <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
   <div className='flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen'>
    <Sidebar />
    <div className='flex-1'>
     <Header />
     {children}
    </div>
   </div>
  </div>
 );

 return (
  <AuthProvider>
   <Router>
    <Routes>
     <Route path='/' element={<LoginPage />} />
     <Route path='/login' element={<LoginPage />} />
     <Route
      path='/dashboard'
      element={
       <PageWrapper>
        <DashboardPage />
       </PageWrapper>
      }
     />
     <Route
      path='/ticket'
      element={
       <PageWrapper>
        <TicketPage />
       </PageWrapper>
      }
     />
     <Route path='*' element={<NotFoundPage />} />
    </Routes>
   </Router>
  </AuthProvider>
 );
}

export default App;
