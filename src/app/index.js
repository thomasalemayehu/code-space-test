import { configureStore } from "@reduxjs/toolkit";
import foodCartReducer from "../components/day2/features/foodCartSlice";
import podcastCheckboxReducer from "../components/day5/features/podcastCheckboxSlice";
const appStore = configureStore({
  reducer: {
    foodCart: foodCartReducer,
    podcastCheckbox: podcastCheckboxReducer,
  },
});


export  { appStore };