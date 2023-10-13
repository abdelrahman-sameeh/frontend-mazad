import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completePayMethod } from "../../redux/actions/payAction";

const CompletePayHook = (product) => {
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleCompletePay = async () => {
    setLoading(true);
    setIsPress(true);
    await dispatch(completePayMethod(product._id));
    setLoading(false);
    setIsPress(false);
  };

  const response = useSelector((state) => state.pay.completePay);

  if (response && response.status === 200) {
    window.open(response.data.session.url);
  }

  return [loading, isPress, handleCompletePay];
};

export default CompletePayHook;
