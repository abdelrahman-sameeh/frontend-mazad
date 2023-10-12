import React from "react";

const ProtectRoute = () => {
  const user = localStorage.user
    ? {
        name: JSON.parse(localStorage.user).name,
        email: JSON.parse(localStorage.user).email,
        role: JSON.parse(localStorage.user).role,
        _id: JSON.parse(localStorage.user)._id,
      }
    : null;
  const isAdmin = user && user.role === "admin" ? true : false;
  const isUser = user && user.role === "user" ? true : false;
  const isTrader = user && user.role === "trader" ? true : false;
  const isAuth = user ? true : false;
  const notAuth = !user ? true : false;
  return [user, isAdmin, isUser, isTrader, isAuth, notAuth];
};

export default ProtectRoute;
