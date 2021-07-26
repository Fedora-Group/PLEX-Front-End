import { combineReducers, configureStore } from "@reduxjs/toolkit";


import signInSlice from './signIn';
import signUpSlice from './signup';
import eventsSlice from './events';
import googleSlice from './google';
const reducers = combineReducers ({signup : signUpSlice , events:eventsSlice, signIn : signInSlice, google :googleSlice});

const store = configureStore({ reducer: reducers });
export default store;