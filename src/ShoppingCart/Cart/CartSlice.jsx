import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = action.payload;
      let existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          imgsrc: newItem.imgsrc,
          subTotal: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.subTotal =
          Number(existingItem.price) * Number(existingItem.quantity);
      }
      state.totalPrice = state.cart
        .map((val) => {
          return val.subTotal;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    removeToCart: (state, action) => {
      let newItem = action.payload;
      state.cart = state.cart.filter((item) => item.id !== newItem);
      state.totalPrice = state.cart
        .map((val) => {
          return val.subTotal;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    decrementItem: (state, action) => {
      let newItem = action.payload;
      let existingItem = state.cart.find((item) => item.id === newItem);

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.subTotal =
          Number(existingItem.price) * Number(existingItem.quantity);
      } else {
        state.cart = state.cart.filter((item) => item.id !== newItem);
      }
      state.totalPrice = state.cart
        .map((val) => {
          return val.subTotal;
        })
        .reduce((prev, next) => prev + next, 0);
    },
    emptyCart: (state, action) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});
export const { addToCart, removeToCart, decrementItem, emptyCart } =
  CartSlice.actions;
export default CartSlice.reducer;
