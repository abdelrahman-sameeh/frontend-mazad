import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificProduct } from "../../redux/actions/productAction";

const ProductDetailsHook = () => {
  const productId = useParams().id;

  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getSpecificProduct(productId));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.product.getSpecificProduct);

  let product = {};

  if (response && response.status === 200) {
    product = response.data.data;
  }

  // mazad time setting
  let mazadDays;
  if (product._id) {
    mazadDays =
      (new Date(product.endTime).getTime() -
        new Date(product.startTime).getTime()) /
      1000 /
      60 /
      60 /
      24;
  }

  // user can participate in mazad
  let canParticipate = false;
  if (
    new Date(Date.now()).getTime() > new Date(product.startTime).getTime() &&
    new Date(Date.now()).getTime() < new Date(product.endTime).getTime()
  ) {
    canParticipate = true;
  }

  return [loading, isPress, product, mazadDays, canParticipate];
};

export default ProductDetailsHook;
