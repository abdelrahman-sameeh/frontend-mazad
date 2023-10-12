import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavorites } from "../../redux/actions/favoriteAction";
import {
  getListOfProducts,
  getSpecificProduct,
} from "../../redux/actions/productAction";
import { getLoggedUser } from "../../redux/actions/authAction";

const AddToFavoritesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  let productId = useParams().id;
  const dispatch = useDispatch();

  const submit = async (e) => {
    productId = productId === undefined ? e.target.dataset.id : productId;

    await dispatch(addToFavorites(productId));
    await dispatch(getLoggedUser());
  };

  return [loading, isPress, submit];
};

export default AddToFavoritesHook;
