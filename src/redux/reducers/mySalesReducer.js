import {
  GET_LOGGED_USER_SALES,
} from "../type";

const initialState = {
  getLoggedUserSales: [],
};
export const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGGED_USER_SALES:
      return {
        ...state,
        getLoggedUserSales: action.payload,
      };
    default:
      return state;
  }
};
