import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../redux/actions/authAction";

const GetLoggedUser = () => {
  const dispatch = useDispatch();
  const run = async () => {
    await dispatch(getLoggedUser());
  };

  useEffect(() => {
    run();
  }, []);
  const response = useSelector((state) => state.auth.getLoggedUser);

  let user;
  if (response && response.status === 200) {
    user = response.data.user;
  } 

  console.log(user);
  return [user];  

};

export default GetLoggedUser;
