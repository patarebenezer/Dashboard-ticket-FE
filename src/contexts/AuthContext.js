import { createContext, useReducer, useContext, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const initialState = {
 isAuthenticated: false,
 user: null,
 token: null,
};

export const AuthProvider = ({ children }) => {
 const [state, dispatch] = useReducer(authReducer, initialState);

 useEffect(() => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");
  if (storedUser && storedToken) {
   dispatch({
    type: "LOGIN",
    payload: { user: JSON.parse(storedUser), token: storedToken },
   });
  }
 }, []);

 const login = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  dispatch({ type: "LOGIN", payload: { user, token } });
 };

 const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
 };

 return (
  <AuthContext.Provider value={{ ...state, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
