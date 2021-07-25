import { createSlice } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { user } from "./signIn";

import superagent from 'superagent';

export const browserHistory = createBrowserHistory();//

let apiUrl = 'https://oauth-maq.herokuapp.com/googleLogin';

const googleSlice = createSlice ({
    name : 'googlesignup',
    initialState : {},
      
    reducers : {
        // addUser (state , action){ 
        //     state['user'] = action.payload;
        //     browserHistory.push('/signin') // this can be edited 
        //     window.location.reload() 
        // }
    }
    
})
// export const { addUser } = signUpSlice.actions;


export const googleSignUp =(user)=>async dispatch => {
console.log('token before!',user.tokenId);
let bodyt ={token: user.tokenObj.id_token};  
superagent.post(apiUrl).send(bodyt)
  .set('Accept-Language', 'en')
    .set('Content-Type', 'application/json')
    .set('mode','cors')
    .set('withCredentials','true')
    // .set ( 'Authorization', `Bearer ${bodyt.token}`)

.then ((res)=>{
    console.log('res api',res);
}).catch((e)=>{
    console.error(e);
})
// axios.post(apiUrl,bodyt,{
//         headers :  {  
//             Authorization: `Bearer ${user.tokenId}`,
//             'Accept-Language':'en',
//             cache:'no-cache',
//             mode: 'cors',
//             'Content-Type': 'application/json',
//             withCredentials : true,
//         },
//     })
//     .then (res => {
//         console.log('check',res.data);
//     }).catch ((err)=> console.error (err))

 
        // dispatch(addUser(user))
}
export default googleSlice.reducer;
