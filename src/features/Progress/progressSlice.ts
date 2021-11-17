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
    nextStep(state, action: PayloadAction){
      state.step = state.step + 1
    },
    previousStep(state, action: PayloadAction){
      state.step = Math.max(state.step - 1, 0)
    }
  },
});

export const {changeStep, nextStep, previousStep} = progressSlice.actions;
