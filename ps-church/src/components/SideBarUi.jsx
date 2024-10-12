// src/components/SideBarUi.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarUi = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="bg-gray-900 w-40 h-full p-4">
        <h2 className="text-2xl font-bold text-white mb-4">Menu</h2>
        <Link to="/" className="block text-white hover:bg-gray-700 p-2 rounded transition-all duration-300" onClick={toggleSidebar}>Home</Link>
        <Link to="/sermon" className="block text-white hover:bg-gray-700 p-2 rounded transition-all duration-300" onClick={toggleSidebar}>Sermon</Link>
        <Link to="/about" className="block text-white hover:bg-gray-700 p-2 rounded transition-all duration-300" onClick={toggleSidebar}>About</Link>
        <Link to="/contact" className="block text-white hover:bg-gray-700 p-2 rounded transition-all duration-300" onClick={toggleSidebar}>Contact</Link>
      </div>
    </aside>
  );
};

export default SideBarUi;
