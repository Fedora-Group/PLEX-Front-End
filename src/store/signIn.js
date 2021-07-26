import { createSlice } from '@reduxjs/toolkit';
//
import { createBrowserHistory } from 'history';

import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';

export const browserHistory = createBrowserHistory();

require('dotenv').config();

// https://oauth-maq.herokuapp.com/

const apiUrl = 'https://oauth-maq.herokuapp.com/';

const SECRET = process.env.React_App_SECRET;

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {},
  reducers: {
  
    loggedIn(state, action) {
      state['loggedIn'] = action.payload;
    },
    token(state, action) {
      state['token'] = action.payload;
    },
    user(state, action) {
      state['user'] = action.payload;
      browserHistory.push('/createRoom') // this can be edited 
      window.location.reload() 
    },
  },
});

export const signIn = (username, password) => async dispatch => {
  const encoded = base64.encode(`${username}:${password}`);

  const url = `${apiUrl}signin`;
  const result = await fetch(url, {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    headers: { Authorization: `Basic ${encoded}` },
  });
  const data = await result.json();
  console.log(data);
  dispatch(validateToken(data.token));
};

const validateToken = token => async dispatch => {
  try {
    const user = jwt.verify(token, SECRET);
    console.log(user)
    dispatch(setLoginState(!!user, token, user));
  } catch (error) {
    console.error('User is not verified', error.message);
    setLoginState(false, null, {});
  }
};

export const logout = () => {
  setLoginState(false, null, {});
  cookie.remove('username')
  cookie.remove('token')
  cookie.remove('session-token')
  window.localStorage.clear();
  sessionStorage.clear();
  cookie.remove();
  window.location.reload();

  
};

const setLoginState = (isloggedIn, istoken, isuser) => async dispatch => {
  cookie.save('token', istoken);
  cookie.save('username', isuser.username);

  dispatch(loggedIn(true));
  dispatch(token(istoken));
  dispatch(user(isuser));
};

// export reducer
export default signInSlice.reducer;

// export actions
export const { loggedIn, token, user } = signInSlice.actions;
