// src/routes/AppRoute.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NavBarUi from '../components/NavBarUi';
import ContactPage from '../pages/ContactPage';
import SermonPage from '../pages/SermonPage';
import SideBarUi from '../components/SideBarUi';

const AppRoute = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBarUi toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <SideBarUi isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sermon" element={<SermonPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AppRoute;
