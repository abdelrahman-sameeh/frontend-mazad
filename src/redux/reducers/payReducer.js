import { GET_STRIPE_SESSION_TO_PAY } from "../type";

const initialState = {
  completePay: [],
};

export const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STRIPE_SESSION_TO_PAY:
      return {
        ...state,
        completePay: action.payload,
      };
    default:
      return state;
  }
};
