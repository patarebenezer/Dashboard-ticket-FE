import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuth";
import { loginService } from "../../services/auth";

const Login = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const { login } = useAuthContext();

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const { user, token } = await loginService(username, password);
   login(user, token);
   console.log("Login successful:", token);
  } catch (error) {
   console.error("Login failed:", error.message);
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <div>
    <label>Username</label>
    <input
     type='text'
     value={username}
     onChange={(e) => setUsername(e.target.value)}
    />
   </div>
   <div>
    <label>Password</label>
    <input
     type='password'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    />
   </div>
   <button type='submit'>Login</button>
  </form>
 );
};

export default Login;
