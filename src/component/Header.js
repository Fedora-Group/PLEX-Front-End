import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const login = () => {
    history.push('/login');
  };
  return (
    <nav class='flex flex-wrap overflow-hidden w-full h-10' aria-label='Global'>
      <div className='w-10/12 overflow-hidden flex items-center space-x-8'>
        {/* <div className='flex items-center overflow-hidden'>
          
        </div> */}
        <div className='flex items-center justify-between'>
          <a href='/'>
            <img
              className='h-8 w-auto sm:h-10'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='logo'
            />
          </a>
        </div>
        <a href='/' className='font-medium text-white hover:text-indigo-500'>
          Home
        </a>
        <a
          href='/event'
          className='font-medium text-white hover:text-indigo-500'
        >
          Events
        </a>
        <a
          href='/aboutus'
          className='font-medium text-white hover:text-indigo-500'
        >
          About Us
        </a>
      </div>
      <div className='w-2/12 overflow-hidden flex justify-end'>
        <button
          onClick={login}
          type='button'
          className='py-2 px-5 bg-gray-600 hover:bg-gray-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
