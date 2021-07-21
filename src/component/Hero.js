import React from 'react';
import SignUp from './signup';

const Hero = () => {
  return (
    <div className='flex flex-wrap overflow-hidden w-full h-4/5'>
      <div className='w-1/2  flex flex-col items-center justify-center'>
        <h2 className='text-white text-6xl font-bold'>
          Data to enrich your{' '}
          <span className='text-indigo-400'>online busniess</span>
        </h2>
        <p className=' text-gray-400 text-xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className='w-1/2 flex  justify-center pt-8'>
        <SignUp />
      </div>
    </div>
  );
};

export default Hero;
