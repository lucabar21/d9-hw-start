import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const favouritesList = configureStore({
  reducer: mainReducer,
});

export default favouritesList;
