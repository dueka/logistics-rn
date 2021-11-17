import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import navReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
