import {
  ADD_PRODUCT,
  GET_LIST_OF_PRODUCTS,
  GET_PRODUCT_IN_MAZAD,
  GET_SPECIFIC_PRODUCT,
} from "../type";

const initialState = {
  addProduct: [],
  getListOfProducts: [],
  getSpecificProduct: [],
  getProductInMazad: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: action.payload,
      };
    case GET_LIST_OF_PRODUCTS:
      return {
        ...state,
        getListOfProducts: action.payload,
      };
    case GET_SPECIFIC_PRODUCT:
      return {
        ...state,
        getSpecificProduct: action.payload,
      };
    case GET_PRODUCT_IN_MAZAD:
      return {
        ...state,
        getProductInMazad: action.payload,
      };
    default:
      return state;
  }
};
