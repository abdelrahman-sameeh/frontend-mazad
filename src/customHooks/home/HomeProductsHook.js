import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfProducts } from "../../redux/actions/productAction";
import { useEffect } from "react";

const HomeProductsHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const dispatch = useDispatch();

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfProducts(`limit=6`));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.product.getListOfProducts);

  let products = [];
  if (response.status === 200) {
    products = response.data.data;
  }

  return [loading, isPress, products];
};

export default HomeProductsHook;
