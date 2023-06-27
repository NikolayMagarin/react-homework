import { createSlice } from "@reduxjs/toolkit";

export const initialStateCart: {[id:string]:0} = {};

export const CartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    changeValue: (cartState, {payload:{movieId, d, preventZero}}: {payload: {movieId: string, d: number, preventZero?:boolean}}) => {
      if (cartState[movieId] == undefined) {cartState[movieId] = 0}
      if (cartState[movieId] + d != 0 || !preventZero) {
        cartState[movieId]+= d;
      }
    }
  },
});

export const selectCart = (state: any) => state.cart;
export const changeCartValue = (movieId: string, d: number) => {CartSlice.actions.changeValue({movieId: movieId, d: d})}
