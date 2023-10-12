import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductInMazad } from "../../redux/actions/productAction";

const GetProductInMazad = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const chatId = useParams().id;

  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getProductInMazad(chatId));
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.product.getProductInMazad);

  let product = {};
  if (response && response.status === 200) {
    product = response.data.data;
  }

  return [loading, isPress, product];
};

export default GetProductInMazad;
