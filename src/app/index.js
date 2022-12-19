import { configureStore } from "@reduxjs/toolkit";
import foodCartReducer from "../components/day2/features/foodCartSlice";
const appStore = configureStore({
  reducer: {
    foodCart: foodCartReducer,
  },
});


export  { appStore };