import { createSlice } from "@reduxjs/toolkit";

export const tradeSlice = createSlice({
  name: "infoLayer",
  initialState: { value: false },
  reducers: {
    changeTradeState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default tradeSlice.reducer;
export const {   changeTradeState } = tradeSlice.actions;