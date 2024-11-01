import { createSlice } from "@reduxjs/toolkit";

const plusmins = createSlice({
  name: 'plmn',
  initialState: { value: 0 }, // initial state set to 0
  reducers: {
    increment: (state) => {
      state.value += 1; // increment by 1
    },
    decrement: (state) => {
      state.value -= 1; // decrement by 1
    },
  },
});

export const { increment, decrement } = plusmins.actions;
export default plusmins.reducer;
