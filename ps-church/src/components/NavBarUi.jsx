import React from 'react';
import { Link } from 'react-router-dom';

const NavBarUi = ({ toggleSidebar }) => {
  return (
    <nav className="bg-transparent text-black shadow-lg h-16 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl font-cursive font-bold tracking-wider hover:text-blue-400 transition-all duration-300 ease-in-out">
            PS Church
          </Link>
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-black focus:outline-none hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-10">
          <Link to="/" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">Home</Link>
          <Link to="/sermon" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">Sermon</Link>
          <Link to="/pastors" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">Pastors</Link>
          <Link to="/about" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">About</Link>
          <Link to="/contact" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">Contact</Link>
          <Link to="/prayer-request" className="text-lg font-cursive hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">Prayer Request</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarUi;
