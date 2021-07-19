import { combineReducers, configureStore } from "@reduxjs/toolkit";

import signInSlice from './signIn';

const reducers = combineReducers ({signIn : signInSlice });
const store = configureStore({ reducer: reducers });
export default store;