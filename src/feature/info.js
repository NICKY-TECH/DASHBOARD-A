import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "infoLayer",
  initialState: { value: false },
  reducers: {
    changeInfoState: (state,action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export default infoSlice.reducer;
export const {  changeInfoState } = infoSlice.actions;