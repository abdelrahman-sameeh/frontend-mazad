import { REGISTER, LOGIN, GET_LOGGED_USER } from "../type";

const initialState = {
  register: [],
  login: [],
  getLoggedUser: {}
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: action.payload,
      };
    case LOGIN:
      return {
        ...state, 
        login: action.payload,
      };
    case GET_LOGGED_USER:
      return {
        ...state,
        getLoggedUser: action.payload,
      };

    default:
      return state;
  }
};
