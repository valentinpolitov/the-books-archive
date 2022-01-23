import { Book } from "./../../types/Books";
import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

interface AppInitialState {
  preferedView: "grid" | "list";
  recentlyViewed: number[];
}

export const appSlice = createSlice<AppInitialState, SliceCaseReducers<AppInitialState>>({
  name: "app",
  initialState: {
    preferedView: "grid",
    recentlyViewed: []
  },
  reducers: {
    setPreferedView: (state, action: PayloadAction<AppInitialState["preferedView"]>) => {
      state.preferedView = action.payload;
    },
    addBookToRecentlyViewed: (state, action: PayloadAction<Book["id"]>) => {
      state.recentlyViewed = Array.from(new Set([action.payload, ...state.recentlyViewed]));
    }
  }
});

export const { reducer: appReducer, actions: appAction } = appSlice;
