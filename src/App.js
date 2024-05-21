import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login/Login";

function App() {
 return (
  <AuthProvider>
   <div>
    <h1>My App</h1>
    <Login />
   </div>
  </AuthProvider>
 );
}

export default App;
