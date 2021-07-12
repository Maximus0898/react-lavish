import React from 'react';
import Hero from '../../Hero';
import Pricing from '../../Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
      <Hero {...homeObjTwo} />
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
};

export default Home;
