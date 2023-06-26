import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "./features/filters";

export const store = configureStore({
  reducer: { filters: filtersSlice.reducer },
});

console.log(store.getState());
