import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FavouritesReducer from "../reducers";
import dataReducer from "../reducers/dataReducer";

const combinedReducers = combineReducers({
  favourites: FavouritesReducer,
  apiData: dataReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export default store;
