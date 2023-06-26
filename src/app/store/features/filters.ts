import { createSlice } from "@reduxjs/toolkit";

export const initialStateFilters = { name: "", genre: "", cinema: "" };

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilters,
  reducers: {
    setFilter: (filtersState, {payload:{filter, value}}: {payload: {filter:"name"|"genre"|"cinema", value: string}}) => {
      filtersState[filter] = value;
    }
  },
});

export const selectFilters = (state: any) => state.filters;
export const setFilter = (filter: "name"|"genre"|"cinema", value: string) => {filtersSlice.actions.setFilter({filter: filter, value: value})}