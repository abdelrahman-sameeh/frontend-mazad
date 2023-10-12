import React from "react";
import NavbarComponent from "../../components/utils/NavbarComponent";
import FooterComponent from "../../components/utils/FooterComponent";
import TraderProductsContainer from "../../components/Trader/TraderProductsContainer";

const TraderProductsPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <TraderProductsContainer />
      <FooterComponent />
    </div>
  );
};

export default TraderProductsPage;
