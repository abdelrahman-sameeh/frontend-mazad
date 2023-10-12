import React from "react";
import NavbarComponent from "../../components/utils/NavbarComponent";
import AddCategoryContainer from "../../components/Category/AddCategoryContainer";
import FooterComponent from "../../components/utils/FooterComponent";

const AddCategoryPage = () => {
  return (
    <div className="page">
      <NavbarComponent />
      <AddCategoryContainer />
      <FooterComponent />
    </div>
  );
};

export default AddCategoryPage;
