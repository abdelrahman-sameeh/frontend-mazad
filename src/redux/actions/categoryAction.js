import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";

import { ADD_CATEGORY, GET_LIST_OF_CATEGORIES } from "../type";

export const addCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/api/v1/categories", data);
    dispatch({
      type: ADD_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_CATEGORY,
      payload: err.response,
    });
  }
};


export const getListOfCategory = queryString => async dispatch => {
  try {
    const response = await useGetData(`/api/v1/categories?${queryString}`);
    dispatch({
      type: GET_LIST_OF_CATEGORIES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_LIST_OF_CATEGORIES,
      payload: err.response,
    });
  }
}