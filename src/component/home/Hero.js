import React from 'react';
import SignUp from '../signup';
import SignIn from '../signin';
import { Route } from 'react-router-dom';
import { ReactComponent as HeroImg } from '../../assets/hero-svg.svg';
import hero from '../../assets/path.png';

const Hero = () => {
  return (
    <div className='flex flex-wrap overflow-hidden w-full h-full'>
      <div className='w-1/2  flex flex-col items-center mt-32 leading-snug pl-8'>
        <h2 className='text-white  w-full'>
          <span className='  text-header  text-6xl font-bold text-buttono'>
            Dive in!
            <br />
            <span className='text-6xl font-bold text-header'>
              There are so many things to do on PLEX
            </span>
          </span>
        </h2>
        <p className=' text-gray-500 text-xl pt-10 font-semibold mt-8'>
          Join a group to meet people, make friends, find support, grow a
          business, and explore your interests. Thousands of events are
          happening every day, both online and in person!
        </p>
      </div>

      <div className='w-1/2 flex  justify-center pt-8 h-5/6'>
        {/* <SignUp />
          
          <SignIn /> */}
        {/* <img src='assets/hero-svg.svg' alt='hero' /> */}
        {/* <HeroImg /> */}
        <img src={hero} alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
