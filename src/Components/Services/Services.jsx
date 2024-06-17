/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Services.css'; // Import custom styles if needed

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <span className="inline-block text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-sm font-semibold mb-2">Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Creative Design Solutions</h2>
        <p className="mt-4 text-lg text-gray-600">
          Professional Design Agency to provide solutions
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card p-6 border border-gray-200 rounded-lg text-left">
            <div className="icon bg-blue-100 p-4 rounded-full mx-auto mb-4">
            <img className="cus-img" src="images/statagy.webp" alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Strategy</h3>
            <ul className="mt-4 text-left text-gray-600 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Management
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                MVP Definition
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Strategy
              </li>
            </ul>
            <a href="#" className="mt-6 inline-block text-blue-600 font-semibold hover:underline">
              Read More &rarr;
            </a>
          </div>

          <div className="service-card p-6 border border-gray-200 rounded-lg text-left">
            <div className="icon bg-blue-100 p-4 rounded-full mx-auto mb-4">
            <img className="cus-img" src="images/p-design.webp" alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Product Design</h3>
            <ul className="mt-4 text-left text-gray-600 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Management
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                MVP Definition
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Strategy
              </li>
            </ul>
            <a href="#" className="mt-6 inline-block text-blue-600 font-semibold hover:underline">
              Read More &rarr;
            </a>
          </div>

          <div className="service-card p-6 border border-gray-200 rounded-lg text-left">
            <div className="icon bg-blue-100 p-4 rounded-full mx-auto mb-4">
                <path d="M13 7h2V5h-2v2zm-6 0h2V5H7v2zm-4 6h2v-2H3v2zm16 0h-2v-2h2v2zm-4 0h-2v-2h2v2zm-6 0H7v-2H5v2zm-2 4h2v-2H7v2zm4 0h2v-2H9v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-16-4h2v-2H3v2zm4 0h2v-2H5v2zm4 0h2v-2H9v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-16 4h2v-2H3v2zm16 0h2v-2h-2v2zm-16-8h2v-2H3v2zm16 0h2v-2h-2v2zm-16 4h2v-2H3v2zm16 0h-2v-2h2v2zm-16-8h2v-2H3v2zm16 0h2v-2h-2v2z" />
                <img className="cus-img" src="images/development.webp" alt="" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">Development</h3>
            <ul className="mt-4 text-left text-gray-600 space-y-2">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Management
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                MVP Definition
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3-10a1 1 0 00-1.707-.707l-2.293 2.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3A1 1 0 0013 8z" clipRule="evenodd" />
                </svg>
                Product Strategy
              </li>
            </ul>
            <a href="#" className="mt-6 inline-block text-blue-600 font-semibold hover:underline">
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
