import React from "react";
import NavbarComponent from "../../components/utils/NavbarComponent";
import FooterComponent from "../../components/utils/FooterComponent";
import MySalesContainer from "../../components/User/MySalesContainer";

const MySalesPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <MySalesContainer />
      <FooterComponent />
    </div>
  );
};

export default MySalesPage;
