import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { movieApi } from "../fetching/movieApi";
import { CartSlice } from "./features/cart";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: [...getDefaultMiddleware(), movieApi.middleware],
});
