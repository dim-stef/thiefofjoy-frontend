import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const progressSlice = createSlice({
  name: "progress",
  initialState: {
    step: 0,
  },
  reducers: {
    changeStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
  },
});

export const {changeStep} = progressSlice.actions;
