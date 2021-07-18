import { createSlice } from "@reduxjs/toolkit";

let apiUrl = 'https://oauth-maq.herokuapp.com/events';

const eventsSlice = createSlice({
    name: 'events',

    initialState: [],
    reducers: {
        get(state, action) {
            action.payload.forEach((item) => {
                state.push(item)
            })
            console.log('stateFromStore', state);
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

export default eventsSlice.reducer;
