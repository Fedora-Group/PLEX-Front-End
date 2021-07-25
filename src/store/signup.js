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
            browserHistory.push('/signin') // this can be edited 
            window.location.reload() 
        }
    }
    
})
export const { addUser } = signUpSlice.actions;

export const signUp = (username, password, role) =>async dispatch => {

    let url = `${apiUrl}signup`;

    let body = { username, password, role };

    let result = await fetch(
        url,
        {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)

        }
    )

    let user = await result.json();
    console.log('user', user);
 
        dispatch(addUser(user))
}
export default signUpSlice.reducer;
