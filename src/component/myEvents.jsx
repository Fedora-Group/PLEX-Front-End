import React , {useEffect} from 'react';
import axios from 'axios'
import {addMyEvent} from '../store/myEvents';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'react-cookies'
import {Link} from 'react-router-dom'
function MyEvents (){
    let user = cookie.load('username')
    const dispatch = useDispatch();
  
      const state = useSelector(state => {
        return {
            myevents: state.myevents
        }
    });

useEffect(() => {
    const apiUrl = "https://oauth-maq.herokuapp.com/events";
    (async () => {
      await axios
        .get(apiUrl, {
            headers: {'Content-Type': 'application/json',
                'Accept-Language':'en',
                cache:'no-cache',
                mode: 'cors',
                withCredentials: true}
        })
        .then((res) => {
          console.log('my events response',res.data);
          dispatch (addMyEvent(res.data))
        })
        .catch((err) => console.error(err));
    })();
}, []);




    return (
        <>
        <h2>My Events : </h2>
            {
                state.myevents
                .filter (item => item.room_owner === user)
                .map ((event)=>{
                    return (
                        <>
                        <h3>{event.name}</h3>
                        <button><Link to={`/event/${event._id}`}>Show Details</Link></button>

                        </>
                    )
                })
            }
        </>
    )
}

export default MyEvents;