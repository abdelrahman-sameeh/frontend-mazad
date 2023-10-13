import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUserFavorites } from "../../redux/actions/favoriteAction";

const ShowFavoritesHook = () => { 


  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();


  const run = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getLoggedUserFavorites());
    setLoading(false);
    setIsPress(false);
  };

  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.favorite.getLoggedUserFavorites);

  let products = [];
  if (response && response.status === 200) {
    products = response.data.data;
  }

  return [loading, isPress, products];
}

export default ShowFavoritesHook