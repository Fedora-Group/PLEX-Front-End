import { createSlice } from "@reduxjs/toolkit";
const myEventsSlice = createSlice({
    name: 'myevents',
    initialState: [],
    reducers: {
        addMyEvent(state, action) {
            console.log ('my events state' , action.payload)
           return action.payload
        },
       
    }

})
export default myEventsSlice.reducer;
export const { addMyEvent } = myEventsSlice.actions;

