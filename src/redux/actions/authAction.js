import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { LOGIN, REGISTER, GET_LOGGED_USER } from "../type";

export const register = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/register", data);
    dispatch({
      type: REGISTER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: REGISTER,
      payload: err.response,
    });
  }
};



export const login = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/login", data);
    dispatch({
      type: LOGIN,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: LOGIN,
      payload: err.response,
    });
  }
};



export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/getLoggedUser");
    dispatch({
      type: GET_LOGGED_USER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LOGGED_USER,
      payload: err.response,
    });
  }
};