import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import cookie from 'react-cookies';
let apiUrl = 'https://oauth-maq.herokuapp.com/events';

const eventsSlice = createSlice({
    name: 'events',

    initialState: [],
    reducers: {
        get(state, action) {
           return action.payload
            // console.log('stateFromStore', state);
        }
    }

})

export const { get } = eventsSlice.actions;

export const getEvents = () => async dispatch => {

    let result = await fetch(
        apiUrl,
        {
            method: 'get',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },

        }
    )
    let events = await result.json();
    console.log('events', events);

    dispatch(get(events))
    console.log('check Hi');
}
export const getEvent = (id) => async dispatch => {
let url = `${apiUrl}/${id}`
const token = cookie.load('token');
    let result =  axios.get (url , {
            headers: { 'Content-Type': 'application/json' , Authorization: `${token}`},
            cache:'no-cache',
            mode: 'cors',
            withCredentials: false  ,
            // authorization: `Bearer ${token}`,
            Cookie: `token=${token}`
        })
        .then (res => {
         
            console.log('check0000',res.data);
        })
        .catch((err) => {
            console.error(err);
        })
  
    console.log('check Hi2');
}

export default eventsSlice.reducer;
