import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { get, getEvents , getEvent , createEvent, updateEvent ,deleteEvent} from '../store/events';

export default function Events(props) {

    const dispatch = useDispatch();

    const state = useSelector(state => {
        return {
            events: state.events
        }
    });


    useEffect(() => {
        dispatch(getEvents())

    }, [])

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

    const editHandler =( e ) =>{
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
        let id = e.target.eventId.value
        dispatch(updateEvent(event , id))
    }

    const deleteHandler = id =>{
        dispatch(deleteEvent( id))
    }
//filter by categories || attendance limit !
console.log('stateEvents',state);
    return (
        <React.Fragment>

            {
                state.events.map((event) => {
                    return (
                    <div>
                            <h2>{event.name}</h2>
                            <small>From : {event.from} To : {event.end}</small>
                            <h3>Hosted By: {event.room_owner}</h3>
                            <p>{event.description ? event.description : ' No description Available'}</p>

                            <button onClick={getEvent(event._id)}>Show details</button>

                            <button onClick={()=> dispatch (deleteHandler (event._id))}>delete Event</button>

                        <div>
                            <form onSubmit={editHandler }>
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
                            </form>
                        </div>

                    </div>
                    )
                })
            }
            <div>
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
            </div>
        </React.Fragment>

    )

}


