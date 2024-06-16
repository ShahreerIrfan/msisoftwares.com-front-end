// src/pages/Home/Home.jsx
/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Hero/Hero';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import InnovativeSolutions from '../InnovativeSolutions/InnovativeSolutions';
import AgencyStatistics from '../AgencyStatistics/AgencyStatistics';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <ProfessionalExperience></ProfessionalExperience>
      <InnovativeSolutions></InnovativeSolutions>
      <AgencyStatistics></AgencyStatistics>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
