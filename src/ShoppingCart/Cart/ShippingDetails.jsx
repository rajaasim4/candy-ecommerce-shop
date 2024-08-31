import { createSlice } from "@reduxjs/toolkit";

const ShippingDetails = createSlice({
  name: "ShippingDetails",
  initialState: { isDetailsFilled: false },
  reducers: {
    checkShippingDetails: (state, action) => {
      state.isDetailsFilled = action.payload;
    },
  },
});

export const { checkShippingDetails } = ShippingDetails.actions;
export default ShippingDetails.reducer;
