import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateEvent, deleteEvent } from "../store/events";
import cookie from "react-cookies";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";

export default function EventDetails(props) {
  const [show, setShow] = useState(false);

  const [event, setEvent] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const id = window.location.pathname.split("/")[2];


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
          // console.log('check',res.data);
          setEvent(res.data);
        })
        .catch((err) => console.error(err));
    })();
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
        <h3> Category: {event.categories}</h3>
        <h3> Attendance limit: {event.attendance_limit}</h3>
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
                <input type="text" name="name" placeholder="name" required/>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                />
                <input type="text" name="from" placeholder="from"  required/>
                <input type="text" name="end" placeholder="end"  required/>

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
