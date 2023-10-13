import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFavorites } from "../../redux/actions/favoriteAction";
import { getLoggedUser } from "../../redux/actions/authAction";

const AddToFavoritesHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  let productId = useParams().id;
  const dispatch = useDispatch();

  const submit = async (e) => {
    productId = productId === undefined ? e.target.dataset.id : productId;
    setLoading(true);
    setIsPress(true);
    await dispatch(addToFavorites(productId));
    await dispatch(getLoggedUser());
    setLoading(false);
    setIsPress(false);
  };

  return [loading, isPress, submit];
};

export default AddToFavoritesHook;
