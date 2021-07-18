import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signUpSlice from './signup';
import eventsSlice from './events';
const reducers = combineReducers ({signup : signUpSlice , events:eventsSlice });
const store = configureStore({ reducer: reducers });
export default store;