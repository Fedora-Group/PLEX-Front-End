import React from 'react';
import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
