import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
