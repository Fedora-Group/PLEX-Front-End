import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { get, getEvents } from '../store/events';

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
                        </div>
                    )
                })
            }
        </React.Fragment>

    )

}


