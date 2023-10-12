import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteFromFavorites } from "../../redux/actions/favoriteAction";
import { getSpecificProduct } from "../../redux/actions/productAction";
import { getLoggedUser } from "../../redux/actions/authAction";

const DeleteFromFavoritesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  let productId = useParams().id;
  const dispatch = useDispatch();

  const submit = async (e) => {
    productId = productId === undefined ? e.target.dataset.id : productId;

    await dispatch(deleteFromFavorites(productId));
    await dispatch(getLoggedUser());
  };

  return [loading, isPress, submit];
};

export default DeleteFromFavoritesHook;
