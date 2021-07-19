import { combineReducers, configureStore } from "@reduxjs/toolkit";


import signInSlice from './signIn';
import signUpSlice from './signup';
import eventsSlice from './events';
const reducers = combineReducers ({signup : signUpSlice , events:eventsSlice, signIn : signInSlice});

const store = configureStore({ reducer: reducers });
export default store;