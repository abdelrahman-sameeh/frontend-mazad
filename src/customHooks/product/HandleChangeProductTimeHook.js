import React, { useEffect, useState } from "react";
import productImage from "../../images/pc.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/authAction";

const productStatus = {
  future: "قادم بعد",
  present: "ينتهى بعد",
  past: "انتهى",
};

const getTimeInDays = (date) => {
  date = date / 1000;
  let days = Math.floor(date / 86400);
  date -= days * 86400;
  let hours = Math.floor(date / 3600) % 24;
  date -= hours * 3600;
  let minutes = Math.floor(date / 60) % 60;
  date -= minutes * 60;
  let seconds = Math.floor(date % 60);

  return [days, hours, minutes, seconds];
};

const HandleChangeProductTimeHook = (product) => {
  let [productStatusValue, setProductStatus] = useState(true);
  let [productDate, setProductDate] = useState("");
  let date = 0;

  const dispatch = useDispatch()

  const run = async () => await dispatch(getLoggedUser());

  useEffect(() => {
    run();

    if (
      new Date(product.startTime).getTime() > new Date(Date.now()).getTime()
    ) {
      setProductDate(product.startTime);
      setProductStatus(productStatus["future"]);
    } else if (
      new Date(product.endTime).getTime() > new Date(Date.now()).getTime()
    ) {
      setProductDate(product.endTime);
      setProductStatus(productStatus["present"]);
    } else {
      setProductDate("");
      setProductStatus(productStatus["past"]);
    }
  }, []);

  useEffect(() => {
    if (productDate != "") {
      date = new Date(productDate).getTime() - new Date(Date.now()).getTime();
    }
  }, [productDate]);

  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const [days, hours, minutes, seconds] = getTimeInDays(date);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, [productDate]);

  // user can participate in mazad
  let canParticipate = false;
  if (
    new Date(Date.now()).getTime() > new Date(product.startTime).getTime() &&
    new Date(Date.now()).getTime() < new Date(product.endTime).getTime()
  ) {
    canParticipate = true;
  }


  // get logged user
  const response = useSelector((state) => state.auth.getLoggedUser);

  let user;
  if (response && response.status === 200) {
    user = response.data.user;
  } 

  return [days, hours, minutes, seconds, productStatusValue, canParticipate, user];
};

export default HandleChangeProductTimeHook;
