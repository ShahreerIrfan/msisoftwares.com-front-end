/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">MSi Softwares</span>
        </Link>
        <button
          onClick={toggleDrawer}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5956E9] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isDrawerOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isDrawerOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5956E9">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5956E9">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className={`hidden w-full md:flex md:items-center md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-sans font-bold items-center">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">
                <button className="bg-[#5956E9] text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Get a Free Quote
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="absolute top-0 left-0 w-64 h-full bg-white shadow-xl">
          <button
            onClick={toggleDrawer}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5956E9] rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isDrawerOpen}
          >
            <span className="sr-only">Close main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#5956E9">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-2 p-4 mt-4">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">
                <button className="bg-[#5956E9] text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Get a Free Quote
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
