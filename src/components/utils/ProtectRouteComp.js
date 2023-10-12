import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRouteComp = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRouteComp;