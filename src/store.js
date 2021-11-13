import { configureStore } from "@reduxjs/toolkit";
import {progressSlice} from '../src/features/Progress/progressSlice';

export const store = configureStore({
  reducer: {
    progress: progressSlice.reducer
  }
})