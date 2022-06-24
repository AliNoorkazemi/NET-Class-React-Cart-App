import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    total_price: 0,
    products: [],
  },
  reducers: {
    add: (state, action) => {
      state.products.push(action.payload);
      state.total_price += action.payload.price;
    },
    remove: (state, action) => {
      state.total_price -= action.payload.price;
      state.products.splice(
        state.products.findIndex((product) => product.id === action.payload.id),
        1
      );
    },
    checkout: (state) => {
      state.total_price = 0;
      state.products = [];
    },
  },
});

export const { add, remove, checkout } = cartSlice.actions;

export default cartSlice.reducer;
