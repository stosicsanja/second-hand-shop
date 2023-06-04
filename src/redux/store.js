import { configureStore } from "@reduxjs/toolkit";
import fleaReducer from "./fleaSlice";

export const store = configureStore({
  reducer: {
    flea: fleaReducer,
  },
});
