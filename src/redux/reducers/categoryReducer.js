import { ADD_CATEGORY, GET_LIST_OF_CATEGORIES } from "../type";

const initialState = {
  addCategory: [],
  getListOfCategory: []
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        addCategory: action.payload,
      };
      case GET_LIST_OF_CATEGORIES:
        return {
          ...state,
          getListOfCategory: action.payload,
        };
    default:
      return state;
  }
};
