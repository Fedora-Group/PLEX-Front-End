import React from 'react';
import SignUp from './signup';
import SignIn from './signin';
import { Route } from 'react-router-dom';
import { ReactComponent as HeroImg } from '../assets/hero-svg.svg';

const Hero = () => {
  return (
    <div className='flex flex-wrap overflow-hidden w-full h-full'>
      <div className='w-1/2  flex flex-col items-center mt-32'>
        <h2 className='text-white  w-full'>
          <span className='bg-clip-text text-transparent bg-gradient-to-br from-rr to-ll text-6xl font-extrabold'>
            Dive in!
            <span className='text-6xl font-bold'>
              There are so many things to do on PLEX
            </span>
          </span>

          {/* 
          background-image: linear-gradient(
83.84deg
, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%);
}
          
          */}
        </h2>
        <p className=' text-gray-400 text-xl pt-10 '>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <Route exact path='/'>
        <div className='w-1/2 flex  justify-center pt-8'>
          {/* <SignUp />
          
          <SignIn /> */}
          {/* <img src='assets/hero-svg.svg' alt='hero' /> */}
          <HeroImg />
        </div>
      </Route>
      <Route exact path='/login'>
        <div className='w-1/2 flex  justify-center pt-8'></div>
      </Route>
    </div>
  );
};

export default Hero;
