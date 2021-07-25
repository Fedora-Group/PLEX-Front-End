import { createSlice } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

let apiUrl = 'https://oauth-maq.herokuapp.com/ctreatRoom';

const roomsSlice = createSlice ({
    name : 'rooms',
    initialState : {},
      
    reducers : {
        addRoom (state , action){ 
            state['user'] = action.payload;
            browserHistory.push('/signin') // this can be edited 
            window.location.reload() 
        }
    }
    
})
export const { addRoom } = roomsSlice.actions;

export const createRoom = () =>async dispatch => {

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
