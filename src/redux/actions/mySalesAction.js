import { useGetData } from "../../hooks/useGetData";
import { GET_LOGGED_USER_SALES } from "../type";

export const getLoggedUserSales = (qryString="") => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/orders?${qryString}`);
    dispatch({
      type: GET_LOGGED_USER_SALES,
      payload: response,
    });
  } catch (err) {
    dispatch({ 
      type: GET_LOGGED_USER_SALES,
      payload: err.response,
    });
  }
};