import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: [],
  features: [],
  billingType: "monthly", // monthly | annual
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      state.plans.push(action.payload); // { name, pricing: { monthly, annual } }
    },
    addFeature: (state, action) => {
      state.features.push(action.payload); // { name, availableIn: [plans] }
    },
    toggleBilling: (state, action) => {
      state.billingType = action.payload;
    },
  },
});

export const { addPlan, addFeature, toggleBilling } = pricingSlice.actions;
export default pricingSlice.reducer;