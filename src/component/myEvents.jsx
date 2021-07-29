import React, { useEffect } from 'react';
import axios from 'axios';
import { addMyEvent } from '../store/myEvents';
import { useDispatch, useSelector } from 'react-redux';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import hero from '../assets/myEvents.png';

export default function MyEvents() {
  let user = cookie.load('username');
  const dispatch = useDispatch();

  const state = useSelector(state => {
    return {
      myevents: state.myevents,
    };
  });

  useEffect(() => {
    const apiUrl = 'https://oauth-maq.herokuapp.com/events';
    (async () => {
      await axios
        .get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en',
            cache: 'no-cache',
            mode: 'cors',
            withCredentials: true,
          },
        })
        .then(res => {
          console.log('my events response', res.data);
          dispatch(addMyEvent(res.data));
        })
        .catch(err => console.error(err));
    })();
  }, []);

  return (
    <>
      <div className=' p-9  min-h-screen bg-myevents bg-centered  md:bg-repeat-round w-full h-full'>
        <div className='flex flex-wrap  overflow-hidden flex-row  text-white  w-full h-full '>
          <div
            className='w-full  flex flex-col items-center  leading-snug   '
            // className="flex  flex-col py-4 my-8  bg-hero text-white rounded-xl w-1/2 h-full "
          >
            <div className='flex justify-center m-2 py-4  '>
              <h2 className='  text-6xl font-bold text-myEventsHeading '>
                My Events
              </h2>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 mt-5  mx-2 '
                viewBox='0 0 20 20'
                fill='#FF6822'
              >
                <path
                  fill-rule='evenodd'
                  d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
                  clip-rule='evenodd'
                />
              </svg>
            </div>
            <div className=' mb-4 pb-2 flex w-full flex-wrap gap-4 justify-center pt-4'>
              {state.myevents
                .filter(item => item.room_owner === user)
                .map(event => {
                  return (
                    <>
                      <div class='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
                        <div class='bg-white dark:bg-gray-800 w-full p-4'>
                          <p class='text-myEventsHeading text-md font-medium'>
                            Event
                          </p>
                          <p class='text-gray-800 dark:text-white text-xl font-medium mb-2'>
                            {event.name}
                          </p>

                          <div class='flex flex-wrap justify-between items-center mt-4'>
                            <div
                              class='capitalize text-xs mr-2 py-1.5 px-4 text-white bg-indigo-500 rounded-2xl'
                              style={{ alignSelf: 'flex-end' }}
                            >
                              {event.privacy}
                            </div>
                            <div>
                              <button
                                type='button'
                                class='py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                              >
                                <Link to={`/event/${event._id}`}>
                                  Show Details
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          {/* <div
            className=' w-1/2 flex     md:bg-repeat-round'
            // className="  flex   py-4 my-8  bg-hero-myEvents  md:bg-cover w-1/2 h-full"
          ></div> */}
        </div>
      </div>
    </>
  );
}
