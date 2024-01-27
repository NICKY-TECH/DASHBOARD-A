import { createSlice } from "@reduxjs/toolkit";

export const infoDataSlice = createSlice({
  name: "infoLayer",
  initialState: { value: {} },
  reducers: {
    changeInfoDataState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default infoDataSlice.reducer;
export const {   changeInfoDataState } = infoDataSlice.actions;