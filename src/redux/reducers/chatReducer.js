import { GET_MESSAGES_IN_SPECIFIC_CHAT } from "../type";

const initialState = {
  getMessagesInSpecificChat: [],
};
export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_IN_SPECIFIC_CHAT:
      return {
        ...state,
        getMessagesInSpecificChat: action.payload,
      };
    default:
      return state;
  }
};
