/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Brand, Design & Development Agency
          </h1>
          <p className="font-styling mt-4 text-lg text-gray-600">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida commodo viverra.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#5956E9] text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 flex items-center justify-center">
              Let's Talk Us
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center custom-size">
          <img
            src="/images/hero.jpg" // Replace this with the actual image URL
            alt="Team working"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
