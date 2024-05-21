import React, { createContext, useReducer, useContext } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const initialState = {
 isAuthenticated: false,
 user: null,
 token: null,
};

export const AuthProvider = ({ children }) => {
 const [state, dispatch] = useReducer(authReducer, initialState);

 const login = (user, token) => {
  dispatch({ type: "LOGIN", payload: { user, token } });
 };

 const logout = () => {
  dispatch({ type: "LOGOUT" });
 };

 return (
  <AuthContext.Provider value={{ ...state, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
