import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "pageValue",
  initialState: {
    value: 0,
  },
  reducers: {
    pageChange: (state,value) => {
      state.value = value?.payload
    },
  },
});

export const { pageChange } = counterSlice.actions;

export default counterSlice.reducer;
