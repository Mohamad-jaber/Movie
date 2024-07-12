import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import BlockUI from "../components/BlockUI";
import AppBar from "../components/AppBar/AppBar";

const AuthRoute = () => {
  const location = useLocation();

  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const isLoggedIn = email && password;

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>
    <AppBar/>
    <Outlet />;
  </>
};

export default AuthRoute;
