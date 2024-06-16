/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './AboutUs.css'; // Import custom styles

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="/images/about-1.jpg" // Replace this with the actual image path in the public folder
            alt="Team working"
            className="about-us-image shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <span className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We're Creative Agency Since 1993
          </h2>
          <p className="t-align mt-4 text-lg text-gray-600">
            Professional Design Agency to provide solutions. On the other hand denounce with righteous and dislike men who beguile and demoralizes by the charms of pleasure these moment, so blinded by desire that they cannot.
          </p>
          <ul className="mt-4 space-y-2 text-left">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700">Digital Creative Agency</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700">Professional Problem Solutions</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-gray-700">Web Design & Development</span>
            </li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-[#5956E9] text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 flex items-center justify-center">
            Learn More
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
