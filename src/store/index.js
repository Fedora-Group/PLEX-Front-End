import { combineReducers, configureStore } from "@reduxjs/toolkit";


import signInSlice from './signIn';
import signUpSlice from './signup';
import eventsSlice from './events';
import googleSlice from './google';
import myEventsSlice from './myEvents';
import roomsFromEventSlice from './roomsFromEvents';
import usersSlice from './users.js';
const reducers = combineReducers ({signup : signUpSlice , 
  events:eventsSlice, signIn : signInSlice, google :googleSlice ,
  roomsFromEvent:roomsFromEventSlice ,myevents :myEventsSlice,
    user:usersSlice});

const store = configureStore({ reducer: reducers });
export default store;