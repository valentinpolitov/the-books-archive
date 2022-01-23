import { configureStore } from "@reduxjs/toolkit";
import { bookAPI } from "../services/BookService";
import reducer from "./reducer";

export const setupStore = () =>
  configureStore({
    reducer,
    middleware: (getDefauleMiddleware) => getDefauleMiddleware().concat(bookAPI.middleware)
  });

export type RootState = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store["dispatch"];
