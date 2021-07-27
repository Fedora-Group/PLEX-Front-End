import { createSlice } from '@reduxjs/toolkit';
//
import { createBrowserHistory } from 'history';


import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';

export const browserHistory = createBrowserHistory();

// require('dotenv').config();

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
     
      // browserHistory.push('/createRoom') // this can be edited 
      
    console.log('user',action.payload);
    state['user']=action.payload;
  
    },

    error1(state, action){
      state['errorMessage']=action.payload;
   console.log('errorMessage',action.payload);

    }
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
  })
    .then((async res=>{
      
      if(res.status===403){
        console.log('hello from 403',res)
        dispatch(error1('not valid'))
      }
      else{

        const data =await res.json();

        console.log(data);
        dispatch(validateToken(data.token));
        
     
        
      }
      
    }))
  
  
  
};

const validateToken = token => async dispatch => {
 
 
  try {
    const user = await jwt.verify(token, SECRET);
    console.log(user)
    
  dispatch(setLoginState(!!user, token, user));
 
   
  
  } catch (error) {
    // dispatch(error(error.message));
    // dispatch(setLoginState(false, null, {}));
    console.error('User is not verified', error.message);
   
  }
};

export const logout = () =>  async dispatch =>{
  setLoginState(false, null, {});
  cookie.remove('username')
  cookie.remove('token')
  cookie.remove('session-token')
  window.localStorage.clear();
  sessionStorage.clear();
  cookie.remove();

//  console.log('hello from logout',cookie.username);
  window.location.reload();

  
};

const setLoginState = (isLoggedIn, isToken, isUser) => async dispatch => {
  cookie.save('token', isToken);
  cookie.save('username', isUser.username);

  dispatch(loggedIn(true));
  dispatch(token(isToken));
  dispatch(user(isUser));
  window.location.reload();
};

// export reducer
export default signInSlice.reducer;

// export actions
export const { loggedIn, token, user,error1 } = signInSlice.actions;
