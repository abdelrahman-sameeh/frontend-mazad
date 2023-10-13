import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfProducts } from "../../redux/actions/productAction";

const filter = {
  future: `endTime[gt]=${new Date(Date.now())}&startTime[gt]=${new Date(
    Date.now()
  )}&`,
  present: `endTime[gt]=${new Date(Date.now())}&startTime[lt]=${new Date(
    Date.now()
  )}&`,
  past: `endTime[lt]=${new Date(Date.now())}&`,
};

const getQuery = () => {
  let queryString = `limit=3&`;

  if (localStorage.filterProduct) queryString += localStorage.filterProduct;
  if (localStorage.filterProductPage)
    queryString += localStorage.filterProductPage;

  if (localStorage.myProducts) {
    queryString += `user=${localStorage.myProducts}&`;
  }

  return queryString;
};

const FilterProductsHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleFilterProducts = async (e) => {
    localStorage.removeItem("filterProductPage");
    if (e.target.dataset.filter != "all") {
      localStorage.filterProduct = filter[e.target.dataset.filter];
    } else {
      localStorage.removeItem("filterProduct");
    }
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfProducts(getQuery()));
    setLoading(false);
    setIsPress(false);
  };

  const handleChangePagination = async (pageCount) => {
    localStorage.filterProductPage = `page=${pageCount}&`;
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfProducts(getQuery()));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.product.getListOfProducts);
  if (response.status === 200) {
    localStorage.productsPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, handleFilterProducts, handleChangePagination];
};

export default FilterProductsHook;
