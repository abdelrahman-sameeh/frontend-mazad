import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteFromFavorites,
  getLoggedUserFavorites,
} from "../../redux/actions/favoriteAction";
import { getLoggedUser } from "../../redux/actions/authAction";

const DeleteFromFavoritesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  let productId = useParams().id;
  const dispatch = useDispatch();

  const submit = async (e) => {
    productId = productId === undefined ? e.target.dataset.id : productId;
    setLoading(true);
    setIsPress(true);
    await dispatch(deleteFromFavorites(productId));
    await dispatch(getLoggedUser());
    await dispatch(getLoggedUserFavorites());
    setLoading(false);
    setIsPress(false);
  };

  return [loading, isPress, submit];
};

export default DeleteFromFavoritesHook;
