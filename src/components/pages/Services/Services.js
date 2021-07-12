import React from 'react';
import Hero from '../../Hero';
import Pricing from '../../Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Services = () => {
  return (
    <>
      <Pricing />
      <Hero {...homeObjFour} />
    </>
  );
};

export default Services;
