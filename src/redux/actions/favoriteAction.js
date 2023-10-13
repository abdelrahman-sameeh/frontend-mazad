import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  GET_LOGGED_USER_FAVORITES,
} from "../type";
import { useUpdateData } from "../../hooks/useUpdateData";
import { useGetData } from "../../hooks/useGetData";

export const addToFavorites = (productId) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/addToFavorites/${productId}`);
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: err.response,
    });
  }
};

export const deleteFromFavorites = (productId) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      `/api/v1/deleteFromFavorites/${productId}`
    );
    dispatch({
      type: DELETE_FROM_FAVORITES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_FROM_FAVORITES,
      payload: err.response,
    });
  }
};

export const getLoggedUserFavorites = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/favorites`);
    dispatch({
      type: GET_LOGGED_USER_FAVORITES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LOGGED_USER_FAVORITES,
      payload: err.response,
    });
  }
};
