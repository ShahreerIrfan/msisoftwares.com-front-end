/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './InnovativeSolutions.css';

const InnovativeSolutions = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: 'url(/images/pattern.png)' }}></div>
      <div className="relative max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <span className="inline-block text-blue-700 bg-white px-3 py-1 rounded-full text-sm font-semibold mb-4">Let's Work</span>
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-justify">
            Experience & <span className="text-green-300">innovative solutions</span> for <span className="text-green-300">creative design</span> & <span className="text-green-300">development agency</span>
          </h1>
          <div className="flex justify-center md:justify-start">
            <button className="mt-8 px-8 py-3 bg-green-400 text-blue-800 rounded-full shadow-lg hover:bg-green-300 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-green-200 flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1">
              Let's Work Together
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-sm custom-shape-wrapper">
            <div className="custom-shape"></div>
            <img
              src="/images/innovative.jpg" // Replace this with the actual image URL
              alt="Team working"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeSolutions;
