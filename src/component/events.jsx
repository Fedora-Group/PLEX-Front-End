import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as HeroImg } from '../assets/card1.svg';
import { getEvents } from '../store/events';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { eventsFromRooms } from '../store/roomsFromEvents';
import cookie from 'react-cookies';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import If from './if';
import '../pagination.css';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export default function Events(props) {
  const [form, setForm] = useState(false);

  // pagination
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [selected, setSelected] = useState(0);

  // const [currentPage, setCurrentPage] = useState(1);

  //mui
  const [state2, setState2] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector(state => {
    return {
      events: state.events,
    };
  });

  useEffect(() => {
    dispatch(getEvents());
    getData();
  }, [offset]);

  const getData = async () => {
    await axios
      .get('https://oauth-maq.herokuapp.com/events', {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en',
          cache: 'no-cache',
          mode: 'cors',
          withCredentials: true,
        },
      })
      .then(res => {
        const data = res.data;
        console.log('this is the res data', data);
        // const last = currentPage * perPage;
        // const first = last - perPage;
        let data2 = data.filter(item => item.privacy === 'public');
        console.log('data 2 for rendering', data2);
        const slice = data2.slice(offset * 5, offset * 5 + 5);
        // const slice = data.filter ((item) => item.privacy === 'public').slice(first, last);

        console.log('this is the slice', slice);

        const postData = slice.map((event, i) => {
          return (
            <div className='w-card  shadow-card m-16'>
              <HeroImg />
              <div key={i} className='p-8'>
                <h2 className='text-indigo-500 font-semibold text-2xl '>
                  {event.name}
                </h2>
                <p className='text-base	text-gray-500 mt-4 mb-4 p-4'>
                  {event.description
                    ? event.description
                    : ' No description Available'}
                </p>

                <Link to={`/event/${event._id}`}>
                  <button className='mb-0.5	py-2 px-4 bg-createEvent hover:bg-createEventHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg py-2 px-4  bg-joinEvent hover:bg-joinEventHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'>
                    Show details
                  </button>
                </Link>
              </div>
            </div>
          );
        });
        console.log('this is the postdata', postData);

        setData(postData);
        console.log('data before count', perPage);
        setPageCount(
          Math.ceil(
            data.filter(item => item.privacy === 'public').length / perPage
          )
        );
      })
      .catch(err => console.error(err));
  };

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };

  const handlePageClick = e => {
    const selectedPage = e.selected;
    // if (selected < selectedPage){
    //   setOffset(offset + 5);
    // }else if (selected > selectedPage){
    //   if (offset >= 5){

    //     setOffset(offset -5);
    //   }else {
    //     setOffset (0)
    //   }
    // }
    // setSelected(selectedPage)
    setOffset(selectedPage); //2
  };

  const toggleHandler = e => {
    console.log('hehe');
    setState2({ ...state2, ['right']: false });
    toggleDrawer('right', false);
  };
  const submitHandler = e => {
    // toggleDrawer("right", true)
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

    toggleHandler(event);

    dispatch(eventsFromRooms(event));
    setForm(false);

    // history.push("/event");
  };

  const useStyles = makeStyles({
    list: {
      width: 600,
      // 'text-align' : 'center',
      padding: '40px',
    },
    fullList: {
      width: 'auto',
    },
  });

  const classes = useStyles();

  const username = cookie.load('username');
  console.log('inside effects', state);

  return (
    <React.Fragment>
      <div className=''>
        <div className='bg-pattern5 bg-cover w-full h-96 text-center p-16'>
          <h1 className='font-bold	text-hero text-4xl mt-20'>
            Explore Public Events And See What Other Users Are Up To!{' '}
          </h1>
          <div className='pt-16 pl-16 pr-16 bg-hero m-36'>
            <p className=' text-white  text-2xl mb-6'>
              People on Plex have fostered community, learned new skills,
              started businesses, and made life-long friends. Join An Event Or
            </p>
            <button
              onClick={toggleDrawer('right', true)}
              className='mb-6 py-2 px-4 bg-createEvent hover:bg-createEventHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg py-2 px-4   focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
            >
              Create Event
            </button>
          </div>
        </div>

        <If condition={username}>
          <div className='bg-white mt-52 text-center'>
            <div className='pgination text-center m-auto'>
              <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </div>
            <div className='flex flex-row	flex-wrap	justify-center items-center content-around '>
              {data}
            </div>
          </div>

          {/* {username && form && ( */}
          <div className='create-event-container '>
            <div>
              <Drawer
                anchor={'right'}
                open={state2['right']}
                onClose={toggleDrawer('right', false)}
                className='p-16'
              >
                <div
                  className={clsx(classes.list, {
                    [classes.fullList]:
                      'right' === 'top' || 'right' === 'bottom',
                  })}
                  role='presentation'
                >
                  <form onSubmit={submitHandler} className='form block w-full'>
                    <h3 className='text-formhead font-semibold text-2xl text-center mb-8'>
                      Please fill this form to create your event
                    </h3>
                    <label className='text-createEvent font-semibold text-1x1'>
                      Name of The Event
                    </label>
                    <input
                      type='text'
                      name='name'
                      placeholder='name'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400'
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Description
                    </label>
                    <input
                      type='text'
                      name='description'
                      placeholder='description'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event Will Begin On
                    </label>
                    <input
                      type='date'
                      name='from'
                      placeholder='from'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event Will End On
                    </label>
                    <input
                      type='date'
                      name='end'
                      placeholder='end'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Attendance Limit
                    </label>
                    <input
                      type='number'
                      name='attendance_limit'
                      placeholder='number'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8'
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event Address
                    </label>
                    <input
                      type='text'
                      name='address'
                      placeholder='address'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event category
                    </label>
                    <input
                      type='text'
                      name='catagories'
                      placeholder='catagories'
                      required
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    />
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event Type
                    </label>
                    <select
                      name='type'
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400'
                    >
                      <option value='real_word'>real world</option>
                      <option value='online'>online</option>
                    </select>
                    <label className='text-createEvent font-semibold text-1x1'>
                      Event Privacy
                    </label>
                    <select
                      name='privacy'
                      className='w-full py-2 border mt-3 border-gray-300 rounded-md p-8 text-gray-400 '
                    >
                      <option value='public'>Public</option>
                      <option value='private'>Private</option>
                    </select>
                    <input type='hidden' name='room_owner' value={username} />{' '}
                    <div className='py-5 border-b-2 border-gray-200 '>
                      <button
                        // onClick={}
                        type='submit'
                        className='w-full bg-joinEvent hover:bg-joinEventHover text-white px-2 py-2 rounded-md'
                      >
                        create
                      </button>
                    </div>
                  </form>
                </div>
              </Drawer>
            </div>
          </div>
          {/* )} */}
        </If>

        <If condition={!username}>
          <p>please sign in first </p>;
        </If>
      </div>
    </React.Fragment>
  );
}
