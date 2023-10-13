import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListOfCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();
  const run = async (_) => {
    setLoading(true);
    setIsPress(true);
    await dispatch(getListOfCategory(`limit=6`));
    setLoading(false);
    setIsPress(false);
  };
  useEffect(() => {
    run();
  }, []);

  const response = useSelector((state) => state.category.getListOfCategory);
  let categories = [];
  if (response && response.status == 200) {
    categories = response.data.data;
  }

  return [loading, isPress, categories];
};

export default HomeCategoryHook;
