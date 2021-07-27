import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateEvent, deleteEvent } from "../store/events";
import cookie from "react-cookies";
import axios from "axios";
import If from "./if";
import { Link, useHistory } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
export default function EventDetails(props) {
 
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState(null);


// for drawer
const [state2, setState2] = React.useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});
//
  const dispatch = useDispatch();
  const history = useHistory();
  const id = window.location.pathname.split("/")[2];

  const state = useSelector((state) => {
    return {
      roomsFromEvent: state.roomsFromEvent,
    };
  });

  // console.log('props',window.location.pathname.split('/')[2]);
  // console.log('state',state.events);

  useEffect(() => {
    const apiUrl = "https://oauth-maq.herokuapp.com/events";

    const url = `${apiUrl}/${id}`;

    const token = cookie.load("token");

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
          console.log("check...........", res.data);

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
      privacy: e.target.privacy.value,
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


// for drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState2({ ...state2, [anchor]: open });
  };
  const useStyles = makeStyles({
    list: {
      width: 600,
      // 'text-align' : 'center',
      padding: "40px",
    },
    fullList: {
      width: "auto",
    },
  });
  const classes = useStyles();


  // console.log(username);
  // console.log(state.events.room_owner);
  if (!event) {
    return (
      <div className="p-9 bg-hero-details min-h-screen  md:bg-repeat-round w-full min-h-screen items-center capitalize">

        <button type="button" 
        className=" justify-center text-2xl m-64 p-4 w-1/2  capitalize bg-hero hover:bg-iconsInDetails focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-offset-2  rounded-2xl "
      
        >
      
         LOADING ...
        </button>
      </div>
    );
    // return <div>loading...</div>;
  }
  /// we need the password ?
  /// the event only gets the id
  /// i can get the event and see the res
  /// from response we take the password
  /// where should i get
  /// button from jsx to the store or here
  /// where to put the button ?
  /// after we get //
  // console.log ('state from details222' , state)
  return (
    <>
      <div className="p-9 bg-hero-details min-h-screen  md:bg-repeat-round w-full min-h-screen items-center capitalize">
        <div className='flex flex-wrap flex-row '>
             <div className=" box-border flex  flex-col flex-wrap p-4  my-32 w-2/3 h-full justify-center bg-hero bg-opacity-1 text-white rounded-xl shadow-lg">
          <div className=" md:pl-2 ">
            <h2 className="  mb-2 mb-4 text-4xl font-extrabold leading-none ">
              {event.name}
            </h2>
            <div className="flex  flex-row mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className=" text-l font-semibold pl-2 w-1/2 ">
                {event.from} - {event.end}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" text-l font-semibold  md:pl-2 ">
                {event.address}{" "}
              </p>
            </div>
            <h3 className=" text-l font-semibold mt-4">
              Hosted By: {event.room_owner}
            </h3>
            <div className="flex  flex-col my-4">
              <h3 className=" text-xl font-semibold mt-2">event description</h3>
              <span>{event.description}</span>
            </div>

            <div className="flex  flex-row flex-wrap mt-4 text-iconsInDetails">
              <div className="flex  flex-row flex-wrap w-1/2">
                     <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              
              {event.type === "real_word" ? (
                <p className=" text-l font-semibold  md:pl-2  w-1/2">
                  {" "}
                  real world
                </p>
              ) : (
                <p className=" text-l font-semibold  md:pl-2 "> {" "} Online </p>
              )}
              </div>
         
              <div className="flex  flex-row flex-wrap w-1/2">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
</svg>
              <p className=" text-l font-semibold  md:pl-2  ">
                 {event.privacy} event
              </p>

              </div>
 
            </div>

            {/* <h3>Type: {event.type}</h3> */}

            <div className="flex  flex-row flex-wrap mt-8 ">
            <h3 className=" text-l font-semibold   w-1/2">Category: {event.catagories}</h3>
            <h3 className=" text-l font-semibold  md:pl-20 w-1/2 ">Attendance limit: {event.attendance_limit}</h3>
            </div>

          
<div className="flex  flex-row flex-wrap mt-4 text-l font-semibold ">
<If condition={event.type === "online"&& username===event.room_owner}>
              <Link to={`/room/p/${event.roomId}?p=${event.password}`}>
                {" "}
                room : {event.roomId}
              </Link>
              {/* <p>{event.privacy === 'public' ?<Link to={`/room/${event.roomId}`}> room : {event.roomId}</Link>:<Link to={`/private/${event.roomId}`}> room : {event.roomId}</Link>}</p> */}
            </If>

            {/* 
        this is a private room : http://localhost:3000/event/60fee7d152294f00155f4945
        this is a public room : http://localhost:3000/event/60ff060952294f00155f495e
        
         */}
</div>
            
          </div>

          
        </div>
        <div className=" box-border flex  flex-col flex-wrap p-4 my-32 w-1/3 h-full justify-center  text-white   ">

<div className='flex flex-wrap flex-col justify-center'>
            {event.room_owner === username && (
              <>
                <button 
                className=" justify-center  mx-16 p-4 w-1/2  capitalize bg-green-400 hover:bg-iconsInDetails focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-offset-2  rounded-lg "
                
                onClick={toggleDrawer("right", true)}>
                  update event
                </button>
                
                <Link to={`/event`}>
                 
                  <button 
                  onClick={() => deleteHandler(event._id)}
                className=" justify-center my-16 mx-16 p-4 w-1/2  capitalize bg-pink-600  hover:bg-detailsButton focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-offset-2  rounded-lg "
                  
                  >
                    delete event
                  </button>
                </Link>
              
            
              
                <div className='container'>
                   
                <Drawer
                anchor={"right"}
                open={state2["right"]}
                onClose={toggleDrawer("right", false)}
                className="p-16"
              >
                <div
                  className={clsx(classes.list, {
                    [classes.fullList]:
                      "right" === "top" || "right" === "bottom",
                  })}
                  role="presentation"
                >
                  <form  onSubmit={editHandler} className="form block w-full capitalize ">
                  <input type="hidden" value={event._id} name="eventId" />
                    <h3 className="text-hero font-semibold text-2xl text-center mb-8 capitalize ">
                      update your event
                    </h3>
                    <label className="text-pink-600 font-semibold text-1x1 mt-4 capitalize">
                      Name of The Event
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                     
                      required
                      className="w-full py-2 border mt-3 mb-4 border-gray-300 rounded-md p-8 text-hero"
                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="description"
                      required
                     
                      className="w-full py-2 border  mb-4 mt-3 border-gray-300 rounded-md p-8 text-hero "                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Event Will Begin On
                    </label>
                    <input
                      type="date"
                      name="from"
                      placeholder="from"
                      required
                      className="w-full py-2 border  mb-4 mt-3 border-gray-300 rounded-md p-8 text-hero "                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Event Will End On
                    </label>
                    <input
                      type="date"
                      name="end"
                      placeholder="end"
                      required
                      className="w-full py-2 border  mb-4 mt-3 border-gray-300 rounded-md p-8 text-hero "                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Attendance Limit
                    </label>
                    <input
                      type="number"
                      name="attendance_limit"
                      placeholder="number"
                      required
                      className="w-full py-2 border mt-3 mb-4 border-gray-300 rounded-md p-8"
                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Event Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="address"
                      required
                      className="w-full py-2 border mt-3 mb-4 border-gray-300 rounded-md p-8 text-hero "                    />
                    <label className="text-pink-600 font-semibold text-1x1">
                      Event category
                    </label>
                    <input
                      type="text"
                      name="catagories"
                      placeholder="catagories"
                      required
                      className="w-full py-2 border mt-3 mb-4 border-gray-300 rounded-md p-8 text-hero "                    />
                    <label className="text-pink-600 font-semibold text-1x1 mb-4 mt-3">
                      Event Type
                    </label>
                    <select
                      name="type"
                      className="w-full py-2 border mt-3  mb-4 border-gray-300 rounded-md p-8 text-hero"                    >
                      <option value="real_word">real world</option>
                      <option value="online">online</option>
                    </select>
                    <label className="text-pink-600 font-semibold text-1x1 mb-4 mt-3">
                      Event Privacy
                    </label>
                    <select
                      name="privacy"
                      className="w-full py-2 border mt-3 mb-4 border-gray-300 rounded-md p-8 text-hero "                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                    <input type="hidden" name="room_owner" value={username} />{" "}
                    <div className='py-5 border-b-2 border-gray-200 ' >
                    <button
                      onClick={toggleDrawer("right", false)}
                      type="submit"
                      className=" capitalize w-full bg-hero text-white text-xl px-4 py-4 rounded-md hover:bg-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-offset-2  rounded-lg"
                    >
                      update event
                    </button>
                    </div>
                  </form>
                </div>
              </Drawer>
                {/* {show && (
                  <form onSubmit={editHandler}>
                    <input type="hidden" value={event._id} name="eventId" />
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      value={event.name}
                      required
                    />
                    <input
                      type="text"
                      name="description"
                      placeholder="description"
                    />
                    <input
                      type="date"
                      name="from"
                      placeholder="from"
                      required
                    />
                    <input type="date" name="end" placeholder="end" required />

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
                    <label>Event Privacy</label>
                    <select name="privacy">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>

                    <input type="hidden" name="room_owner" value={username} />
                    <button type="submit">update</button>
                  </form>
                )} */}
                </div>
                
              </>
            )}
          </div>
</div >
      </div>
        </div>
     
    </>
  );
}
