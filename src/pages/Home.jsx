import React from 'react'
import Hero from '../components/sections/Hero';
import Expertise from '../components/sections/Expertise';
import SelectedProjects from '../components/sections/SelectedProjects';
import HomeCTA from '../components/sections/HomeCTA';
const Home = () => {
  return (
    <>
    <Hero/>
    <Expertise/>
    <SelectedProjects/>
    <HomeCTA/>
    </>
  );
};

export default Home;