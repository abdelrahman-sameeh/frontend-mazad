import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { favoriteReducer } from "./favoriteReducer";
import { chatReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  favorite: favoriteReducer,
  chat: chatReducer
})