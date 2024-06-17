// src/pages/Home/Home.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import InnovativeSolutions from '../InnovativeSolutions/InnovativeSolutions';


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <ProfessionalExperience></ProfessionalExperience>
      <InnovativeSolutions></InnovativeSolutions>
    </div>
  );
};

export default Home;
