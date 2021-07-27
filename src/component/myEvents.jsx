import React, { useEffect } from "react";
import axios from "axios";
import { addMyEvent } from "../store/myEvents";
import { useDispatch, useSelector } from "react-redux";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

export default function MyEvents() {
  let user = cookie.load("username");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      myevents: state.myevents,
    };
  });

  useEffect(() => {
    const apiUrl = "https://oauth-maq.herokuapp.com/events";
    (async () => {
      await axios
        .get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            "Accept-Language": "en",
            cache: "no-cache",
            mode: "cors",
            withCredentials: true,
          },
        })
        .then((res) => {
          console.log("my events response", res.data);
          dispatch(addMyEvent(res.data));
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <>
      <div className=" p-9 bg-hero-myEvents min-h-screen  bg-centered  md:bg-repeat-round w-full h-full">
        <div className="flex  flex-col p-4 m-8  bg-hero text-white rounded-xl">
          <div className="flex m-2 py-4 ">
            <h2 className="  text-4xl font-bold ">My Events </h2>
          </div>
          <div className='mb-4 pb-2'>
          {state.myevents
            .filter((item) => item.room_owner === user)
            .map((event) => {
              return (
                <>
              
                  <div className="flex p-4  flex-wrap content-center border-b border-soli border-top-50  border-gray-500 border-opacity-50  ">
                    <h3 className="w-1/3 mt-3 text-xl font-semibold ">{event.name}</h3>
                    <h3 className=" w-1/3 mt-3  text-xl font-semibold">{event.privacy} event</h3>
                    <div className=" w-1/3 flex items-center  content-center ">
              
                        <button
                          className=" py-2 px-4 w-1/2  bg-myEvents hover:bg-createEvent focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          <Link to={`/event/${event._id}`}>Show Details</Link>
                        </button>
                  
                    </div>
                  </div>
                  
                </>
              );
            })}
        </div>
      </div>
      </div>
    </>
  );
}
