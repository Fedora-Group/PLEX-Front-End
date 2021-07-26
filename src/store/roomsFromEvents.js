import { createSlice } from "@reduxjs/toolkit";
import { createBrowserHistory } from 'history';
import axios from 'axios';
import cookie from 'react-cookies';
import {createEvent} from './events'
export const browserHistory = createBrowserHistory();
// `/p/${record.roomId}?p=${encoded}` //

const roomsFromEventSlice = createSlice ({
    name : 'roomsFromEvent',
    initialState : {},
      
    reducers : {
        roomCreated (state , action){
            console.log ('state from store , the created room from event' , action.payload);
            return action.payload
        }
    }
    
})
export const { roomCreated } = roomsFromEventSlice.actions;

export const eventsFromRooms = (event) =>async dispatch => {
   console.log ('this is the event type' , event.type)
    if (event.type === 'real_word'){
        console.log ('inside if ')
        dispatch (createEvent(event))
    }else {
        console.log ('inside else ')
        const token = cookie.load('token');
        let uri = `https://oauth-maq.herokuapp.com/ctreatRoom`;
        if (event.privacy === 'public'){
            axios
            .post(
                uri,
                {},
                {
                    headers: {
                    'Accept-Language': 'en',
                    'Content-Type': 'application/json',
                    mode: 'cors',
                    withCredentials: 'true',
                    Authorization: `Bearer ${token}`,
                },
            }
            )
            .then(item => {
                // if (record.data.record.category === 'public') {
                    //   history.push(`/room/${record.data.record.roomId}`);
                    // } else {
                        //   history.push(`/p/room/${record.data.record.roomId}`);
                        // }
                        console.log('record 3shan neveen',item.data.record);
                        let id = item.data.record.roomId
                        console.log ('id for room' , id)
                        let event2 = {
                            name : event.name,
                            description : event.description,
                            from : event.from,
                            end  : event.end ,
                            attendance_limit : event.attendance_limit,
                            address : event.address ,
                            catagories : event.catagories,
                            type : event.type,
                            privacy : 'public',
                            room_owner  :event.room_owner,
                            roomId : id
                        }
                        dispatch(createEvent(event2));
                        dispatch (roomCreated(item.data.record))
                    })
              .catch(err => console.log(err));
        }else {



            axios
            .post(
                uri,
                {category : 'private' , password : 'trial'},
                {
                    headers: {
                    'Accept-Language': 'en',
                    'Content-Type': 'application/json',
                    mode: 'cors',
                    withCredentials: 'true',
                    Authorization: `Bearer ${token}`,
                },
            }
            )
            .then(item => {
                // if (record.data.record.category === 'public') {
                    //   history.push(`/room/${record.data.record.roomId}`);
                    // } else {
                        //   history.push(`/p/room/${record.data.record.roomId}`);
                        // }
                        console.log('private record 3shan neveen',item.data.record);
                        let id = item.data.record.roomId
                        let pass = item.data.record.password
                        console.log ('pass for room' , pass)
                        let event2 = {
                            name : event.name,
                            description : event.description,
                            from : event.from,
                            end  : event.end ,
                            attendance_limit : event.attendance_limit,
                            address : event.address ,
                            catagories : event.catagories,
                            type : event.type,
                            privacy : 'private',
                            room_owner  :event.room_owner,
                            roomId : id,
                            password : pass
                        }
                        dispatch(createEvent(event2));
                        dispatch (roomCreated(item.data.record))
                    })
              .catch(err => console.log(err));


        }
        
        // creating rooms //
        // let uri = `http://localhost:4000/ctreatRoom`;

        
          
          
        }
 
        
}
export default roomsFromEventSlice.reducer;
