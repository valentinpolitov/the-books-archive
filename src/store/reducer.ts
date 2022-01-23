import { bookAPI } from "./../services/BookService";
import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
  [bookAPI.reducerPath]: bookAPI.reducer
});

export default rootReducer;
