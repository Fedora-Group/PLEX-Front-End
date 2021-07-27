import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateEvent, deleteEvent } from "../store/events";
import cookie from "react-cookies";
import axios from "axios";
import If from './if'
import { Link, useHistory } from "react-router-dom";

export default function EventDetails(props) {
  const [show, setShow] = useState(false);

  const [event, setEvent] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const id = window.location.pathname.split("/")[2];




  const state = useSelector(state => {
    return {
      roomsFromEvent: state.roomsFromEvent
    }
});

  // console.log('props',window.location.pathname.split('/')[2]);
  // console.log('state',state.events);

  useEffect(() => {
    const apiUrl = "https://oauth-maq.herokuapp.com/events";

    const url = `${apiUrl}/${id}`;

    const token = cookie.load('token');

    (async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept-Language": "en",
            cache: "no-cache",
            mode: "cors",
            withCredentials: true,
          },
        })
        .then((res) => {
          console.log('check...........',res.data);

          setEvent(res.data);
          
        })
        .catch((err) => console.error(err));
    })()
    // .then(()=>{

    //   (async () => {
    //     let url2 = `https://oauth-maq.herokuapp.com/${event.roomId}`
    //     await axios
    //       .get(url2, {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //           "Content-Type": "application/json",
    //           "Accept-Language": "en",
    //           cache: "no-cache",
    //           mode: "cors",
    //           withCredentials: true,
    //         },
    //       })
    //       .then((res) => {
    //         console.log('check for private',res);
  
    //         // setEvent(res.data);
            
    //       })
    //       .catch((err) => console.error(err));
    //   })()
    // })

  }, []);

  const editHandler = (e) => {
    e.preventDefault();
    let event = {
      name: e.target.name.value,
      description: e.target.description.value,
      from: e.target.from.value,
      end: e.target.end.value,
      attendance_limit: e.target.attendance_limit.value,
      address: e.target.address.value,
      catagories: e.target.catagories.value,
      type: e.target.type.value,
      privacy : e.target.privacy.value,
      room_owner: e.target.room_owner.value,
    };
    let id = e.target.eventId.value;
    dispatch(updateEvent(event, id));
    history.push("/event");
    setShow(false);
  };

  const deleteHandler = (id) => {
    dispatch(deleteEvent(id));
 
  };
  const username = cookie.load("username");
  // console.log(username);
  // console.log(state.events.room_owner);
  if (!event) {
    return <div>loading...</div>;
  }
  /// we need the password ?
  /// the event only gets the id
  /// i can get the event and see the res
  /// from response we take the password 
  /// where should i get 
  /// button from jsx to the store or here 
  /// where to put the button ? 
  /// after we get // 
console.log ('state from details222' , state)
  return (
    <>
      <div>
        <h2>Name: {event.name}</h2>
        <small>
          From : {event.from} To : {event.end}
        </small>
        <h3>Description: {event.description}</h3>
        <h3>Hosted By: {event.room_owner}</h3>
        <h3> Location: {event.address}</h3>
        <h3> Type: {event.type}</h3>
        <h3> Category: {event.catagories}</h3>
        <h3> Attendance limit: {event.attendance_limit}</h3>
        <h3> Privacy: {event.privacy}</h3>
        <If condition={event.type === 'online'}>
        <Link to={`/room/p/${event.roomId}?p=${event.password}`}> room : {event.roomId}</Link>
        {/* <p>{event.privacy === 'public' ?<Link to={`/room/${event.roomId}`}> room : {event.roomId}</Link>:<Link to={`/private/${event.roomId}`}> room : {event.roomId}</Link>}</p> */}
        </If>
        
        {/* 
        this is a private room : http://localhost:3000/event/60fee7d152294f00155f4945
        this is a public room : http://localhost:3000/event/60ff060952294f00155f495e
        
         */}
      </div>

      <div>
       
        {event.room_owner === username && (
          <>
            <button onClick={() => (show ? setShow(false) : setShow(true))}>
              update event
            </button>

            <Link to={`/event`}>
              <button onClick={() => deleteHandler(event._id)}>
                delete event
              </button>
            </Link>
            {show && (
              <form onSubmit={editHandler}>
                <input type="hidden" value={event._id} name="eventId" />
                <input type="text" name="name" placeholder="name" value={event.name} required/>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                />
                <input type="date" name="from" placeholder="from"  required/>
                <input type="date" name="end" placeholder="end"  required/>

                <input
                  type="number"
                  name="attendance_limit"
                  placeholder="number"
                  required
                />
                <input type="text" name="address" placeholder="address" required/>
                <input type="text" name="catagories" placeholder="catagories" required />

                <select name="type">
                  <option value="real_word">real_world</option>
                  <option value="online">online</option>
                </select>
                <label>Event Privacy</label>
                <select name="privacy">
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>

                <input type="hidden" name="room_owner" value={username}  />
                <button type="submit">update</button>
              </form>
            )}

            <hr></hr>
            <hr></hr>
          </>
        )}
      </div>
    </>
  );
}
