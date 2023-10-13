import { GET_ONE_ORDER, GET_STRIPE_SESSION_TO_PAY } from "../type";

const initialState = {
  completePay: [],
  getOneOrder: [],
};

export const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STRIPE_SESSION_TO_PAY:
      return {
        ...state,
        completePay: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        ...state,
        getOneOrder: action.payload,
      };
    default:
      return state;
  }
};
