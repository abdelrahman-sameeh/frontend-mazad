import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import CreateProductPage from "./pages/Product/CreateProductPage";
import AddCategoryPage from "./pages/Category/AddCategoryPage";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import { ToastContainer } from "react-toastify";
import ProtectRoute from "./customHooks/utils/ProtectRoute";
import ProtectRouteComp from "./components/utils/ProtectRouteComp";
import ProductsPage from "./pages/Product/ProductsPage";
import TraderProductsPage from "./pages/Trader/TraderProductsPage";
import MazadPage from "./pages/Mazad/MazadPage";

function App() {
  const [user, isAdmin, isUser, isTrader, isAuth, notAuth] = ProtectRoute();

  return (
    <div className="App">
      <Routes>
        {/* anyone */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/products" element={<ProductsPage />} />

        {/* not auth */}
        <Route element={<ProtectRouteComp auth={notAuth} />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* admin */}
        <Route element={<ProtectRouteComp auth={isAdmin} />}>
          <Route path="/addCategory" element={<AddCategoryPage />} />
        </Route>

        {/* trader */}
        <Route element={<ProtectRouteComp auth={isTrader} />}>
          <Route path="/addProduct" element={<CreateProductPage />} />
          <Route path="/traderProducts" element={<TraderProductsPage />} />
        </Route>

        {/* trader */}
        <Route element={<ProtectRouteComp auth={isUser} />}>
          <Route path="/mazad/:id" element={<MazadPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
