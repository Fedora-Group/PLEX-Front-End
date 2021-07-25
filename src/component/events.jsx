import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {get, getEvents , getEvent , createEvent, updateEvent ,deleteEvent} from '../store/events';
import{useState} from 'react';
import{Link} from 'react-router-dom';

import cookie from 'react-cookies';
export default function Events(props) {

const [show,setShow]=useState(false)

    const dispatch = useDispatch();

    const state = useSelector(state => {
        return {
            events: state.events

        }
    });

    // dispatch(getEvents())

    useEffect(() => {
        dispatch(getEvents())
        console.log('inside effects',state.events);

    },[])
    // useEffect(() => {
    //     dispatch(getEvents())

    // }, [state])
    const submitHandler = e =>{
        e.preventDefault()
        let event = {
            name : e.target.name.value,
            description :e.target.description.value,
            from : e.target.from.value,
            end  : e.target.end.value,
            attendance_limit :e.target.attendance_limit.value,
            address : e.target.address.value,
            catagories :e.target.catagories.value,
            type : e.target.type.value,
            room_owner  :e.target.room_owner.value,
        }
        dispatch(createEvent(event))
    }

    // const editHandler =( e ) =>{
    //     e.preventDefault()
    //     let event = {
    //         name : e.target.name.value,
    //         description :e.target.description.value,
    //         from : e.target.from.value,
    //         end  : e.target.end.value,
    //         attendance_limit :e.target.attendance_limit.value,
    //         address : e.target.address.value,
    //         catagories :e.target.catagories.value,
    //         type : e.target.type.value,
    //         room_owner  :e.target.room_owner.value,
    //     }
    //     let id = e.target.eventId.value
    //     dispatch(updateEvent(event , id))
    // }

    // const deleteHandler = id =>{
    //     dispatch(deleteEvent( id))
    // }
    // const detailsHandler = id =>{
    //     console.log('in details',id);
    //      (getEvent( id))
    //     setShow(true)

    //    console.log(getEvent( id))
    // }
//filter by categories || attendance limit !
// console.log('stateEvents',state);
// console.log('cookie',cookie.load('username'));

const username=cookie.load('username')
    return (
        <React.Fragment>

           {/* { console.log('state',state.events)}; */}
            {
                state.events.map((event) => {
                    if(username){
                    return (
                    <div>
                            <h2>{event.name}</h2>
                            <p>{event.description ? event.description : ' No description Available'}</p>
                          
                            <Link to={`/event/${event._id}`}>
                            <button 
                            // onClick={()=>{ }}
                            >Show details
                            </button>
                            </Link>
                            <hr></hr>

                           

                        <div>
                            {/* <If condition > */}
                           {event.room_owner===username &&
                           <>
                            {/* <form onSubmit={editHandler }>
                                <input type='hidden' value={event._id} name='eventId'/>
                                <input type='text' name='name' placeholder='name' />
                                <input type='text' name='description' placeholder='description'/>
                                <input type='text' name='from' placeholder='from' />
                                <input type='text' name='end' placeholder='end'/>

                                <input type='number' name='attendance_limit' placeholder='number'/>
                                <input type='text' name='address' placeholder='address'/>
                                <input type='text' name='catagories' placeholder='catagories'/>

                                <select  name="type">
                   
                                    <option value="real_word">real_word</option>
                                    <option value="online">online</option>
                                </select>

                                <input type='text' name='room_owner' placeholder='room owner'/>
                                <button type='submit'>submit</button>
                            </form> */}
                             {/* <button onClick={()=> (editHandler (event._id))}>update event</button>
                             <button onClick={()=> (deleteHandler (event._id))}>delete event</button> */}
                             <hr></hr>
                             <hr></hr>
                             </>
                    } 
                            {/* </If> */}
                        </div>

                    </div>
                    )}
                    else{
                <p>please sign in first </p>
            }
                })
            }
            
            {/* <div>
            <hr/>
                <form onSubmit={submitHandler}>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name='description' placeholder='description'/>
                    <input type='text' name='from' placeholder='from' />
                    <input type='text' name='end' placeholder='end'/>

                    <input type='number' name='attendance_limit' placeholder='number'/>
                    <input type='text' name='address' placeholder='address'/>
                    <input type='text' name='catagories' placeholder='catagories'/>

                    <select  name="type">
                   
                        <option value="real_word">real_word</option>
                        <option value="online">online</option>
                    </select>
                    <input type='text' name='room_owner' placeholder='room owner'/>
                    <button type='submit'>submit</button>
                </form>
            </div> */}
        </React.Fragment>

    )

}


