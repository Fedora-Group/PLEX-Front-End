import React from 'react';
import SignUp from './signup';
import SignIn from './signin';
import { Route } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-wrap overflow-hidden w-full h-full'>
      <div className='w-1/2  flex flex-col items-center mt-32'>
        <h2 className='text-white text-6xl font-extrabold w-full'>
          Data to enrich your{' '}
          <span className='text-indigo-400'>online busniess</span>
        </h2>
        <p className=' text-gray-400 text-xl pt-10 '>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <Route exact path='/'>
        <div className='w-1/2 flex  justify-center pt-8'>
          <SignUp />
          <SignIn />
        </div>
      </Route>
      <Route exact path='/login'>
        <div className='w-1/2 flex  justify-center pt-8'></div>
      </Route>
    </div>
  );
};

export default Hero;
