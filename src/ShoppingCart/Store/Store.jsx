import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Cart/CartSlice";
import ShippingDetails from "../Cart/ShippingDetails";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    ShippingDetails: ShippingDetails,
  },
});
