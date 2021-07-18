import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signUpSlice from './signup';
const reducers = combineReducers ({signup : signUpSlice });
const store = configureStore({ reducer: reducers });
export default store;