import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import ProtectRoute from "../../customHooks/utils/ProtectRoute";

const NavbarComponent = () => {
  const [user, isAdmin, isUser, isTrader, isAuth, notAuth] = ProtectRoute();
    
  return (
    <div className="bg-light p-2 navbar">
      <div
        style={{ flexWrap: "nowrap" }}
        className="container d-flex align-items-center justify-content-between gap-3"
      >
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        {/* links */}
        <div className="links d-flex flex-wrap align-items-center">
          {/* trader */}
          {isTrader && (
            <>
              <Link to="/addProduct">اضف منتج</Link>
              <Link to="/traderProducts">منتجاتى</Link>
            </>
          )}
          {/* user */}
          {isUser && (
            <>
              <Link to="/myPurchases">مشترياتى</Link>
              <Link to="/favorites">المفضلة</Link>
            </>
          )}
          {/* admin */}
          {isAdmin && <Link to="/addCategory">تصنيف جديد</Link>}
          {/* is auth */}
          {notAuth && (
            <Link to="/login" className="btn text-light main-btn">
              تسجيل الدخول{" "}
            </Link>
          )}
          {isAuth && (
            <Link
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
              className="btn text-light btn-danger"
            >
              تسجيل الخروج{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
