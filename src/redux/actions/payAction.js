import { useGetData } from "../../hooks/useGetData";
import { GET_STRIPE_SESSION_TO_PAY, GET_ONE_ORDER } from "../type";

export const completePayMethod = (productId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/checkout-session/${productId}`);
    dispatch({
      type: GET_STRIPE_SESSION_TO_PAY,
      payload: response,
    });
  } catch (err) {
    dispatch({ 
      type: GET_STRIPE_SESSION_TO_PAY,
      payload: err.response,
    });
  }
};


export const getOneOrder = (productId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/orders/${productId}`);
    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (err) {
    dispatch({ 
      type: GET_ONE_ORDER,
      payload: err.response,
    });
  }
};