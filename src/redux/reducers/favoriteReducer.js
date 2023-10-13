import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  GET_LOGGED_USER_FAVORITES,
} from "../type";

const initialState = {
  addToFavorite: [],
  deleteFromFavorite: [],
  getLoggedUserFavorites: [],
};
export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        addToFavorite: action.payload,
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        deleteFromFavorite: action.payload,
      };
    case GET_LOGGED_USER_FAVORITES:
      return {
        ...state,
        getLoggedUserFavorites: action.payload,
      };
    default:
      return state;
  }
};
