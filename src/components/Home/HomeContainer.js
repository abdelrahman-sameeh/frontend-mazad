import NavbarComponent from "../utils/NavbarComponent";
import HomeCategories from "./HomeCategories";
import HomeProductsComp from "./HomeProductsComp";
import HomeSectionStaticComp from "./HomeSectionStaticComp";
import HomeSubTitle from "./HomeSubTitle";

const HomeContainer = () => {
  return (
    <div>
      {/* navbar */}
      <NavbarComponent />
      {/* content */}
      <div className="container">
        <HomeCategories />
        <HomeSubTitle />
      </div>
      <HomeProductsComp />
      <div className="container">
        <HomeSectionStaticComp />
      </div>
    </div>
  );
};

export default HomeContainer;
