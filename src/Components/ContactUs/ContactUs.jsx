/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-2/3 text-center md:text-left md:pr-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Have Any on <span className="text-blue-500">Project Mind!</span> Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:space-x-8 items-center justify-center md:justify-start">
            <div className="mb-4 md:mb-0 flex items-center space-x-3">
              <i className="fas fa-envelope text-blue-500 text-xl"></i> 
              <div>
                <span className="font-semibold">Email Us</span>
                <p className="text-gray-600">support@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-phone text-blue-500 text-xl"></i> 
              <div>
                <span className="font-semibold">Phone Us</span>
                <p className="text-gray-600">+012 (345) 67 89</p>
              </div>
            </div>
          </div>
          <form className="mt-8 space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
                placeholder="Email Address"
              />
            </div>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              rows="5"
              placeholder="Write Message"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition flex items-center justify-center mx-auto md:mx-0"
            >
              Send Us Message <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </form>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-sm">
            <img
              src="/images/contact-1.jpg" // Replace this with the actual image URL
              alt="Contact"
              className="rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 opacity-10"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
    </section>
  );
};

export default ContactUs;
