import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";

import {
  ADD_PRODUCT,
  GET_LIST_OF_PRODUCTS,
  GET_SPECIFIC_PRODUCT,
  GET_PRODUCT_IN_MAZAD,
} from "../type";

export const addProduct = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/product", data);
    dispatch({
      type: ADD_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_PRODUCT,
      payload: err.response,
    });
  }
};

export const getListOfProducts = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/product?${queryString}`);
    dispatch({
      type: GET_LIST_OF_PRODUCTS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LIST_OF_PRODUCTS,
      payload: err.response,
    });
  }
};

export const getSpecificProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/product/${id}`);
    dispatch({
      type: GET_SPECIFIC_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_SPECIFIC_PRODUCT,
      payload: err.response,
    });
  }
};

export const getProductInMazad = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/mazadProduct/${id}`);
    dispatch({
      type: GET_PRODUCT_IN_MAZAD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_IN_MAZAD,
      payload: err.response,
    });
  }
};
