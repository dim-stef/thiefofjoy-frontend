import { createSlice } from "@reduxjs/toolkit";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    step: 0,
  },
  reducers: {
    changeStep(state, action) {
      state.step = action;
    },
  },
});
