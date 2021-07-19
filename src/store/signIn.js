import { createSlice } from "@reduxjs/toolkit";
//
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';
//
import { useDispatch } from "react-redux";

require('dotenv').config()

// https://oauth-maq.herokuapp.com/

const apiUrl = 'https://oauth-maq.herokuapp.com/';

const SECRET=process.env.React_App_SECRET

const signInSlice=createSlice({
  name:'signIn',
  initialState:{},
  reducers:{
    
    // logIn(state,action){state[]}
    loggedIn(state,action){state['loggedIn']=action.payload },
    token(state,action){console.log('ffff');state['token']=action.payload},
    user(state,action){console.log('hhh');state['user']=action.payload},
  }


})

 export const signIn =   (username, password) => async dispatch=>{
    const encoded = base64.encode(`${username}:${password}`)

    const url = `${apiUrl}signin`
    const result = await fetch(
        url,
        {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { Authorization: `Basic ${encoded}` },
        }
       
    );
  
    const data = await result.json();
    dispatch(validateToken(data.token));

    
}

const validateToken = (token) => async dispatch=> {
    try {
        const user = jwt.verify(token, SECRET);

      dispatch(setLoginState(!!user, token, user))  ;
    }
     catch (error) {
        console.error('User is not verified', error.message);
        setLoginState(false, null, {})
    }
}


export const logout = () => {
   setLoginState(false, null, {})
}

 const setLoginState = (isloggedIn, istoken, isuser) =>async dispatch=>  {

    cookie.save('token', token);

    dispatch((loggedIn(true)));
    dispatch((token(istoken)));
    dispatch((user(isuser)));

    

}



// export reducer
export default signInSlice.reducer;

// export actions
export const { loggedIn,token,user } = signInSlice.actions;