import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfProducts } from "../../redux/actions/productAction";

const ShowTraderProductsHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  
  let queryString = `limit=2&`;
  if(localStorage.user){
    queryString += `user=${JSON.parse(localStorage.user)._id}`
  }
  
  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfProducts(queryString));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.product.getListOfProducts);

  let products = [];
  if (response && response.status === 200) {
    products = response.data.data;
    localStorage.productsPagination = JSON.stringify(response.data.pagination);
  }

  return [loading, isPress, products];
};

export default ShowTraderProductsHook;
