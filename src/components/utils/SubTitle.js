import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ pageName }) => {
  return (
    <div className="py-4 px-3 rounded bg-light">
      <Link to='/' className="fw-bold "> الرئيسية /</Link>  <span className="fw-bold"> {pageName} </span>
    </div>
  );
};

export default SubTitle;
