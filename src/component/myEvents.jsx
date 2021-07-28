import React, { useEffect } from "react";
import axios from "axios";
import { addMyEvent } from "../store/myEvents";
import { useDispatch, useSelector } from "react-redux";
import cookie from "react-cookies";
import { Link } from "react-router-dom";
import hero from '../assets/myEvents.png';

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
      <div className=" p-9  min-h-screen  bg-centered  md:bg-repeat-round w-full h-full">
       
          
      <div className="flex flex-wrap  overflow-hidden flex-row  text-white  w-full h-full ">
        <div 
        className="w-1/2  flex flex-col items-center  leading-snug   "
        // className="flex  flex-col py-4 my-8  bg-hero text-white rounded-xl w-1/2 h-full "
        >
          <div className="flex w-full m-2 py-4  ">
            <h2 className="  text-6xl font-bold text-myEventsHeading text-left">My Events </h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-5  mx-2 " viewBox="0 0 20 20" fill="#FF6822">
  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
</svg>
          </div>
          <div className='w-5/6 mb-4 pb-2 '>
          {state.myevents
            .filter((item) => item.room_owner === user)
            .map((event) => {
              return (
                <>
              
                  <div className="flex w-full px-4 py-4  flex-wrap content-center text-hero border m-4 shadow rounded-lg">
                    <h3 className="capitalize flex flex-wrap w-1/3 mt-3 text-xl font-semibold ">{event.name}</h3>
                    <h3 className=" capitalize  w-1/3 mt-3  text-xl font-semibold">{event.privacy} event</h3>
                    <div className=" w-1/3 flex items-center  content-center mt-3 ">
              
                        <button
                          className=" py-2 px-4   bg-myEventsButton hover:bg-gray-400 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
      <div 
      className=" w-1/2 flex     md:bg-repeat-round"
      // className="  flex   py-4 my-8  bg-hero-myEvents  md:bg-cover w-1/2 h-full"
      >
        <img 
        className=" w-full h-full object-cover"
        src={hero} alt='hero' />
      </div>
      
      </div>
      </div>
    </>
  );
}
