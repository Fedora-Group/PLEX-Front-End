import { createSlice } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

let apiUrl = 'https://oauth-maq.herokuapp.com/';

const signUpSlice = createSlice ({
    name : 'signup',
    initialState : {},
      
    reducers : {
        addUser (state , action){ 
            state['user'] = action.payload;
            // browserHistory.push('/signin') // this can be edited 
            // window.location.reload() 
        },
        error1(state, action){
            state['errorMessage']=action.payload;
         console.log('errorMessage',action.payload);
      
          }
    }
    
})
export const { addUser,error1 } = signUpSlice.actions;

export const signUp = (username, password, role) =>async dispatch => {

    const url = `${apiUrl}signup`;

    const body = { username, password, role };

    const result = await fetch(
        url,
        {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        }
    )
    .then((async res=>{
      
        if(res.status===500){
          console.log('hello from 403',res)
          dispatch(error1('not valid'))
        }
        else{
  
          const user =await res.json();
          console.log('user', user);
        
          dispatch(addUser(user))
          dispatch(error1(''))
        }
    // let user = await result.json();
    // console.log('user', user);
    }))
       
}
export default signUpSlice.reducer;
