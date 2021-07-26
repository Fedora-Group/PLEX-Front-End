import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEvents, createEvent } from "../store/events";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import cookie from "react-cookies";
export default function Events(props) {
  const [form, setForm] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => {
    return {
      events: state.events,
    };
  });

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const submitHandler = (e) => {
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
    dispatch(createEvent(event));
    setForm(false);
    history.push("/event");
  };



  const username = cookie.load("username");
  console.log("inside effects", state);
  return (
    <React.Fragment>
      
      {state.events.map((event, i) => {
        if (username) {
          return (
            <div>
              <div key={i}>
                <h2>{event.name}</h2>
                <p>
                  {event.description
                    ? event.description
                    : " No description Available"}
                </p>

                <Link to={`/event/${event._id}`}>
                  <button
                  // onClick={()=>{ }}
                  >
                    Show details
                  </button>
                </Link>
                <hr></hr>
              </div>
            </div>
          );
        } else {
          <p>please sign in first </p>;
        }

      })}
      <div>
        <div>
          <button onClick={() => (form ? setForm(false) : setForm(true))}>
            Create Event
          </button>
        </div>

        {username && form && (
          <>

            <div>
              <hr />
              <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="name" required />
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  required
                />
                <input type="text" name="from" placeholder="from" required />
                <input type="text" name="end" placeholder="end" required />

                <input
                  type="number"
                  name="attendance_limit"
                  placeholder="number"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  required
                />
                <input
                  type="text"
                  name="catagories"
                  placeholder="catagories"
                  required
                />

                <select name="type">
                  <option value="real_word">real_world</option>
                  <option value="online">online</option>
                </select>
                <input type="hidden" name="room_owner" value={username} />
                <button type="submit">create</button>
              </form>
            </div>
            <hr></hr>
            <hr></hr>
          </>
        )}
      </div>
    </React.Fragment>
  );
}
