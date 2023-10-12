import React from "react";
import { Link } from "react-router-dom";

const HomeSubTitle = () => {
  return (
    <div className="between fw-bold mt-3">
      <h2 className="fw-bold"> المزادات </h2>
      <Link to='/products' className="btn main-btn"> عرض الكل </Link>
    </div>
  );
};

export default HomeSubTitle;
