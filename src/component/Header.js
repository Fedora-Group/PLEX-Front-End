import React from 'react';
import { Route, useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//
import cookie from 'react-cookies';

import { logout } from '../store/signIn';

const Header = () => {
  const history = useHistory();
  //
  const token = cookie.load('token');
  console.log(token);
  const dispatch = useDispatch();

  const login = () => {
    history.push('/login');
  };
  const logoutHandler = () => {
    dispatch(logout());

    console.log('log');
    // history.push('/');
  };
  return (
    <nav
      className='flex flex-wrap overflow-hidden w-full h-10 bg-hero px-8 sticky top-0 h-16 z-50'
      aria-label='Global'
    >
      <div className='w-10/12 overflow-hidden flex items-center space-x-8'>
        {/* <div className='flex items-center overflow-hidden'>
          
        </div> */}
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='logo'
            />
          </Link>
        </div>
        <a href='/' className='font-medium text-white hover:text-indigo-500'>
          Home
        </a>
        <Link
          to='/createRoom'
          className='font-medium text-white hover:text-indigo-500'
        >
          Create Room
        </Link>
        <Link
          to='/event'
          className='font-medium text-white hover:text-indigo-500'
        >
          Events
        </Link>
        <Link
          to='/aboutus'
          className='font-medium text-white hover:text-indigo-500'
        >
          About Us
        </Link>
      </div>
      {!token && (
        <>
          {/* <Route exact path='/'> */}
          <div
          // className='w-2/12 overflow-hidden flex justify-end'
          >
            <button
              onClick={login}
              type='button'
              // className='py-2 px-5 bg-gray-600 hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              Login
            </button>
          </div>
          {/* </Route> */}
          {/* <Route exact path='/login'> */}

          <div
          // className='w-2/12 overflow-hidden flex justify-end'
          >
            <button
              onClick={() => {
                history.push('/signup');
              }}
              type='button'
              // className='py-10 px-10 bg-gray-600 hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              Sign up
            </button>
          </div>
        </>
      )}
      {/* </Route> */}

      {token && (
        <div
        // className='w-2/12 overflow-hidden flex justify-end'
        >
          <button
            onClick={logoutHandler}
            type='submit'
            // className='py-10 px-10  hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
          >
            Log out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
