import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AppRoute({ component: Comp, isAuth }) {
  const token = localStorage.getItem("token");

  if (isAuth) {
    if (!token) return <Comp />;
    return <Navigate to="/" replace />;
  }

  return <Comp />;
}

export default AppRoute;
