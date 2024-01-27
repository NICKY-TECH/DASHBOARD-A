import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: "asideeffect",
  initialState: { value: false },
  reducers: {
   asideState: (state,action) => {
    if(action.payload===false){
        return {
          ...state,
          value:action.payload
        }
      }
       return {
          ...state,
          value: !state.value
       }
    },
  },
});

export default asideSlice.reducer;
export const { asideState } = asideSlice.actions;
