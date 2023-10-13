import { GET_STRIPE_SESSION_TO_PAY } from "../type";

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