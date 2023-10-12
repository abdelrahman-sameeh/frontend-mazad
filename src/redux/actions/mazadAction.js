import { GET_MESSAGES_IN_SPECIFIC_CHAT } from "../type";

import {useGetData} from '../../hooks/useGetData'

export const getMessagesInSpecificChat = (chatId) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/chat/${chatId}`);
    dispatch({
      type: GET_MESSAGES_IN_SPECIFIC_CHAT,
      payload: response,
    });
  } catch (err) {
    dispatch({ 
      type: GET_MESSAGES_IN_SPECIFIC_CHAT,
      payload: err.response,
    });
  }
};
